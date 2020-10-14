# Hello Folks!👐
## Let's get started with your first Pull Request, Bring it on✨
### Firstly, we'll begin with forking the <a href="https://github.com/swaaz/gitgo">repository</a>📂. You'll find the fork icon on the top-right corner of the page, Click on it.
```
https://github.com/swaaz/gitgo
```
### Now, Clone/download the forked repository into your local machine. To do this click the green button saying "Code", copy the URL and paste it in your Gitbash terminal like so. 
```
 git clone https://github.com/YOUR_USERNAME/gitgo.git
```
### cd into the cloned folder and start working on your profile.
```
cd gitgo
```
### Before you start adding your profile details 📝 in your main branch, let's make changes in the project safely off to one side by creating a new branch.
### To create a new branch, type the following command in your terminal.
```
git branch [username-profile]
```
### Replace username with your GitHub username.
### Let's move into the branch you just created.
```
git checkout [branch-name]
```
### You're all set to start adding your profile details🔥
### In your downloaded repository 📂, Navigate to ```src/Components/profileList```. In the ```profileList.js``` file you might already see few profiles added, add your profile👽 by refering to the same.

```
{
name:  'your_name',
githubUsername: 'gh_username',
instagramUsername: 'ig_username',
twitterUsername: 'twitter_username',
linkedinURL: 'linkedin.com/your_username',
},
```
### Save your file.
### Now you must stage all the changes you made. Type the following command in your terminal(inside your project directory) to do so.
```
git add -A
```
### Commit✅ the staged changes with a message.
```
git commit -m "[your_message]"
```
### Lastly, push your changes to the forked repository of your GitHub account🚩.
```
git push -u origin [your_branch_name]
```
### In your web browser, goto the forked copy in your account and create a pull request from the 'new branch' you created into➡️ swaaz's profile branch.
### Once, you submit your pull request, wait for it to be merged. Once merged successfully👏 you will be able to see your profile in the <a href="/Profiles">profile tab</a>.⭐
