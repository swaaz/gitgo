import React from 'react';
import Styles from './styles.module.scss';
import Logo from '../../assets/logo/gitifylogo.png';
// import { Link } from 'react-router-dom';


function Instructions() {
    return (
        <div className={Styles.instruction}>

            <div className={Styles.header}>
                <a href='/'>
                <img src={Logo} alt='gitgo' />
                </a>
            </div>

            <div className={Styles.heading}>
                <h1>Instructions</h1>
                <div className={Styles.line}></div>
            </div>

            <div className={Styles.container}>
            <h1>Hello Folks!<span role="img" aria-label="High Five">👐</span></h1>
            <h2>Let's get started with your first Pull Request, Bring it on<span role="img" aria-label="sparkle">✨</span></h2><br/>
            <h3>Firstly, we'll begin with forking the <a href="https://github.com/swaaz/gitgo" target='_blank' rel="noopener noreferrer">repository</a><span role="img" aria-label="file">📂</span>. You'll find the fork icon on the top-right corner of the page, Click on it.</h3>
            <p>https://github.com/swaaz/gitgo</p><br/>
            <h3>Now, Clone/download the forked repository into your local machine. To do this click the green button saying "Code", copy the URL and paste it in your Gitbash terminal like so.</h3>
            <p>git clone https://github.com/YOUR_USERNAME/gitgo.git</p><br/>
            <h3>cd into the cloned folder and start working on your profile.</h3>
            <p>cd gitgo</p><br/>
            <h3>Before you start adding your profile details<span role="img" aria-label="file">📝</span>in your main branch, let's make changes in the project safely off to one side by creating a new branch.</h3>
            <h3>To create a new branch, type the following command in your terminal.</h3>
            <p>git branch [username-profile]</p>
            <h3>Replace username with your GitHub username.</h3><br/>
            <h3>Let's move into the branch you just created.</h3>
            <p>git checkout [branch-name]</p><br/>
            <h3>You're all set to start adding your profile details<span role="img" aria-label="fire">🔥</span></h3>
            <h3>In your downloaded repository<span role="img" aria-label="file">📂</span>, Navigate to <span>src/Components/profileList</span>. In the <span>profileList.js</span> file you might already see few profiles added, add your profile<span role="img" aria-label="arrow">👽</span> by refering to the same.</h3>
            <p>
            &#123; <br/>         
            name:  'your_name',<br/>
            githubUsername: 'gh_username',<br/>
            instagramUsername: 'ig_username',<br/>
            twitterUsername: 'twitter_username',<br/>
            linkedinURL: 'linkedin.com/your_username',<br/>
            &#125;,
            </p>
            <h3>Save your file.</h3><br/>
            <h3>Now you must stage all the changes you made. Type the following command in your terminal(inside your project directory) to do so.</h3>
            <p>git add -A</p><br/>
            <h3>Commit<span role="img" aria-label="check">✅</span> the staged changes with a message.</h3>
            <p>git commit -m "[your_message]"</p><br/>
            <h3>Lastly, push your changes to the forked repository of your GitHub account<span role="img" aria-label="flag">🚩</span>.</h3>
            <p>git push -u origin [your_branch_name]</p><br/>
            <h3>In your web browser, goto the forked copy in your account and create a pull request from the 'new branch' you created into<span role="img" aria-label="arrow">➡️</span> swaaz's profile branch.</h3>
            <h3>Once, you submit your pull request, wait for it to be merged. Once merged successfully<span role="img" aria-label="claps">👏</span> you will be able to see your profile in the <a href="/Profiles">profile tab</a>.<span role="img" aria-label="star">⭐</span></h3>
            </div>

            </div>
    )
}

export default Instructions;
