# LinkedList

## 结构
LinkedList由双向链表构成。

![](https://cdn.nlark.com/yuque/0/2025/png/39040375/1740324772561-fab8e0b1-da61-4227-b588-b549828d3aa2.png)

```java
public class LinkedList<E>
    extends AbstractSequentialList<E>
    implements List<E>, Deque<E>, Cloneable, java.io.Serializable
{
    transient int size = 0;

    /**
     * Pointer to first node.
     * Invariant: (first == null && last == null) ||
     *            (first.prev == null && first.item != null)
     */
    // 头节点
    transient Node<E> first;

    /**
     * Pointer to last node.
     * Invariant: (first == null && last == null) ||
     *            (last.next == null && last.item != null)
     */
    // 尾节点
    transient Node<E> last;

```

每个节点的结构如下:

```java
private static class Node<E> {
    // 值
    E item;
    // 下一个节点指针
    Node<E> next;
    // 前一个节点指针
    Node<E> prev;

    Node(Node<E> prev, E element, Node<E> next) {
        this.item = element;
        this.next = next;
        this.prev = prev;
    }
}
```

## 初始化
有两个构造器，分别是无参数和传入一个集合。

```java
// 创建一个空的链表对象
public LinkedList() {
}

// 接收一个集合类型作为参数，会创建一个与传入集合相同元素的链表对象
public LinkedList(Collection<? extends E> c) {
    this();
    addAll(c);
}
```

## 插入元素
add()方法，将元素插入到链表的末尾。

```java
public boolean add(E e) {
        linkLast(e);
        return true;
    }

void linkLast(E e) {
        // 链表的尾节点当成上一个节点
        final Node<E> l = last;
        // 构造一个节点
        final Node<E> newNode = new Node<>(l, e, null);
        // 当前节点作为新的尾巴节点
        last = newNode;
        // 如果是空链表，当前节点为第一个节点
        if (l == null)
            first = newNode;
        // 否则上一次的尾节点指向当前新节点
        else
            l.next = newNode;
        size++;
        modCount++;
    }

```


add(index, element)方法将元素插入到指定位置。

```java
// 在链表指定位置插入元素
public void add(int index, E element) {
    // 下标越界检查
    checkPositionIndex(index);

    // 判断 index 是不是链表尾部位置
    if (index == size)
        // 如果是就直接调用 linkLast 方法将元素节点插入链表尾部即可
        linkLast(element);
    else
        // 如果不是则调用 linkBefore 方法将其插入指定元素之前
        linkBefore(element, node(index));
}

// 找到下表为index的元素
Node<E> node(int index) {
    // assert isElementIndex(index);

    if (index < (size >> 1)) {
        Node<E> x = first;
        for (int i = 0; i < index; i++)
            x = x.next;
        return x;
    } else {
        Node<E> x = last;
        for (int i = size - 1; i > index; i--)
            x = x.prev;
        return x;
    }
}

// 在指定元素之前插入元素
void linkBefore(E e, Node<E> succ) {
    // assert succ != null;断言 succ不为 null
    // 定义一个节点元素保存 succ 的 prev 引用，也就是它的前一节点信息
    final Node<E> pred = succ.prev;
    // 初始化节点，并指明前驱和后继节点
    final Node<E> newNode = new Node<>(pred, e, succ);
    // 将 succ 节点前驱引用 prev 指向新节点
    succ.prev = newNode;
    // 判断前驱节点是否为空，为空表示 succ 是第一个节点
    if (pred == null)
        // 新节点成为第一个节点
        first = newNode;
    else
        // succ 节点前驱的后继引用指向新节点
        pred.next = newNode;
    size++;
    modCount++;
}
```


## 获取元素
总共有三个获取元素方法：

```java
// 获取链表的第一个元素
public E getFirst() {
    final Node<E> f = first;
    if (f == null)
        throw new NoSuchElementException();
    return f.item;
}

// 获取链表的最后一个元素
public E getLast() {
    final Node<E> l = last;
    if (l == null)
        throw new NoSuchElementException();
    return l.item;
}

// 获取链表指定位置的元素
public E get(int index) {
  // 下标越界检查
  checkElementIndex(index);
  // 返回链表中对应下标的元素
  return node(index).item;
}

// 找到下表为index的元素
Node<E> node(int index) {
    // assert isElementIndex(index);

    if (index < (size >> 1)) {
        Node<E> x = first;
        for (int i = 0; i < index; i++)
            x = x.next;
        return x;
    } else {
        Node<E> x = last;
        for (int i = size - 1; i > index; i--)
            x = x.prev;
        return x;
    }
}
```


## 删除元素
主要介绍remove(Object)和remove(index)方法

```java
// 删除链表中首次出现的指定元素，如果不存在该元素则返回 false
public boolean remove(Object o) {
    // 如果指定元素为 null，遍历链表找到第一个为 null 的元素进行删除
    if (o == null) {
        for (Node<E> x = first; x != null; x = x.next) {
            if (x.item == null) {
                unlink(x);
                return true;
            }
        }
    } else {
        // 如果不为 null ,遍历链表找到要删除的节点
        for (Node<E> x = first; x != null; x = x.next) {
            if (o.equals(x.item)) {
                unlink(x);
                return true;
            }
        }
    }
    return false;
}

// 删除链表指定位置的元素
public E remove(int index) {
    // 下标越界检查，如果越界就抛异常
    checkElementIndex(index);
    return unlink(node(index));
}

```

unlinx(Node)方法如下:

```java
// 入参数，要删除的元素节点，也就是当前节点
E unlink(Node<E> x) {
    // assert x != null;
    final E element = x.item;
    // 获取当前元素的前驱和后继节点
    final Node<E> next = x.next;
    final Node<E> prev = x.prev;
    // 前驱节点为null,说明要删除的元素是第一个元素，直接让frist节点指向后继节点
    if (prev == null) {
        first = next;
    } else {
         // 否则让前驱节点指向后继节点
        prev.next = next;
        // 置空当前节点指向前节点的指针
        x.prev = null;
    }

    // 如果后继节点为null， 说明当前节点是最好一个节点，next指向前驱节点
    if (next == null) {
        last = prev;
    } else {
        // 否则就让后继节点指向前驱节点
        next.prev = prev;
        // 置空当前节点指向后节点的指针
        x.next = null;
    }

    x.item = null;
    size--;
    modCount++;
    return element;
}
```

