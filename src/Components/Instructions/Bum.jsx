import React from 'react'

function Bum() {
    return (
        <div>
            <h1>Hello Folks!👐</h1>
            <h3>Let's get started with your first Pull Request, Bring it on✨</h3><br/>
            <h3>Firstly, we'll begin with forking the repository. You'll find the fork *icon* on the top-right corner of the page, Click on it.</h3>
            <p>https://github.com/haxzie/GitMe</p><br/>
            <h3>Now, Clone/download the forked repository into your local machine. To do this click the green button saying "Code", copy the URL and paste it in your Gitbash terminal</h3>
            <p>git clone https://github.com/swaaz/gitify.git</p><br/>
            <h3>cd into the cloned folder and start working on your profile.</h3>
            <p>cd gitify</p><br/>
            <h3>Before you start adding your profile details📝in your main branch, let's make changes in the project safely off to one side by creating a new branch.</h3>
            <h3>To create a new branch, type the following command in your terminal</h3>
            <p>git branch [username-profile]</p>
            <h3>Replace username with your GitHub username</h3><br/>
            <h3>Let's move into the branch you just created.</h3>
            <p>git checkout [branch-name]</p><br/>
            <h3>You're all set to start adding your profile details🔥</h3>
            <h3>In your downloaded repository📂, Navigate to *src/Components/profileList*. In the profileList.js file you might already see few profiles added, add your profile👽 by refering to the same</h3>
            <h3>Save your file</h3>
            <p>tatti tatti💩 </p><br/>
            <h3>Stage all the changes you made. Type the following command in your terminal(inside your project directory).</h3>
            <p>git add -A</p><br/>
            <h3>Commit✅ the staged changes with a message.</h3>
            <p>git commit -m "[your_message]"</p><br/>
            <h3>Lastly, push your changes to the forked repository of your GitHub account🚩.</h3>
            <p>git push -u origin [your_branch_name]</p>
        </div>
    )
}

export default Bum;
