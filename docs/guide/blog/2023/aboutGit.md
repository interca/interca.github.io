# git常用操作[](https://justin3go.com/博客/2022/04git常用操作#git常用操作)

## 同步master[](https://justin3go.com/博客/2022/04git常用操作#同步master)

- 而如果feat分支有两个提交，然后直接`git rebase master`，就有可能需要处理两次冲突(假设master分支提交的与feat提交的在同一份文件中)，`git add .`,`git rebase --continue`,

## 合并多个commit[](https://justin3go.com/博客/2022/04git常用操作#合并多个commit)

- git log --oneline
- git rebase -i commitHash ：`commitHash`是commitID，是需要合并的commit的前一个commit节点的ID
- git rebase -i head~2 ：合并最近两次提交
- 最后记得使用git push -f 强制推送，而不是使用vscode的同步代码，那个会先拉取。
- rebase的时候，修改冲突后的提交不是使用commit命令，而是执行rebase命令指定 --continue选项。若要取消rebase，指定 --abort选项。

## cherry-pick[](https://justin3go.com/博客/2022/04git常用操作#cherry-pick)

它的功能是把已经存在的commit进行挑选，然后重新提交。 （今天我记得就是我有分支被我弄乱了，因为我在开发的过程中同步拉取了远程的代码，所以顺序是我提交-->别人提交-->我提交）这时候，使用check-pick就很好的解决了合并提交记录的问题，当然，最好还是不要在开发分支的过程中同步远程master仓库。

例子： 在`master`的基础上，`test`进行了2次提交，`normal`进行了1次提交。现在想把`test`的第2次提交 （仅仅是第2次提交，不包含第1次提交）和`normal`的第1次提交合并到master分支，直接merge分支是行不通的，这样会把两个分支的全部提交都合并到`master`，用`cherry-pick`即可完美的解决问题， 如果`normal`第一次提交的`SHA-1`值是`9b47dd`，`test`第二次提交的值是`dd4e49`，执行如下命令即可把这两个提交合并到`master`

sh

```
git cherry-pick 9b47dd dd4e49
```

如果有冲突，则需要修改冲突文件，然后添加修改文件到暂存区，命令如下：

sh

```
git add main.js
```

最后执行

sh

```
git cherry-pick --continue
```

cherry-pick后

最后要说明的是：

- 执行完`git cherry-pick --continue`后不需要commit了，该命令会自动提交
- `git cherry-pick --abort`可以放弃本次`cherry-pick`
- `git cherry-pick 9b47dd dd4e49`和`git cherry-pick dd4e49 9b47dd`这两个的结果可能会**不一样**，**顺序很重要**

## 其他[](https://justin3go.com/博客/2022/04git常用操作#其他)

- git amend：修改同一个分支最近提交的注解和内容
- 在revert可以取消指定的提交内容。使用后面要提到的rebase -i或reset也可以删除提交。但是，不能随便删除已经发布的提交，这时需要通过revert创建要否定的提交。
- 在reset可以遗弃不再使用的提交。执行遗弃时，需要根据影响的范围而指定不同的模式，可以指定是否复原索引或工作树的内容。
- 在rebase指定i选项，您可以改写、替换、删除或合并提交。

## 优秀文章[](https://justin3go.com/博客/2022/04git常用操作#优秀文章)

- [猴子都能懂的git入门](https://backlog.com/git-tutorial/cn/stepup/stepup1_5.html)
- [如何优雅解决git 中冲突](https://juejin.cn/post/7064134612129644558)
- [Git提交历史的修改删除合并](https://juejin.cn/post/6844903521993621511)
- [使用git rebase合并多次commit](https://juejin.cn/post/6844903600976576519)
- **[前端架构师的 git 功力，你有几成火候？](https://juejin.cn/post/7024043015794589727)**