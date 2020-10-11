import React from 'react';
import CodeSnippet from './components/CodeSnippet';
import Heading from './components/Heading';
import SubHeading from './components/SubHeading';
import Styles from './styles.module.scss';

function Rightside() {
    return (
        <div className={Styles.rightSide}>

            {/* container */}
            <div className={Styles.stack} id=''>

                {/* heading */}
                <Heading id={'installGit'} heading={'INSTALL GIT'} />

                {/* sub-heading */}
                <SubHeading 
                    subheading={'GitHub provides desktop clients that include a GUI for the most common repository actions and automatically updating command line edition of Git for advanced scenarios'} />

                {/* code snippet and description */}
                <CodeSnippet 
                    code={''} 
                    description={''} 
                />
                <CodeSnippet 
                    code={''} 
                    description={''} 
                /><br/><br/>
            

            
                <Heading id={'configureTooling'} heading={'CONFIGURE TOOLING'} />
                <SubHeading 
                    subheading={'Configure user information for all local repositories'} />
                <CodeSnippet 
                    code={'git config --global user.name "[name]"'} 
                    description={'Sets the name you want attached to your commit transactions'}                     
                />
                <CodeSnippet 
                    code={'git config --global user.email "[email address]"'} 
                    description={'Sets the email you want attached to your commit transactions'}                     
                />
                <CodeSnippet 
                    code={'git config --global color.ui auto'} 
                    description={'Enables helpful colorization of command line output'}                     
                /><br/><br/>
            


                <Heading id={'createRepositories'} heading={'CREATE REPOSITORIES'} />
                <SubHeading 
                    subheading={'Start a new repository or obtain one from an existing URL'} />
                <CodeSnippet 
                    code={'git init [project-name]'} 
                    description={'Creates a new local repository with the specified name'} 
                />
                <CodeSnippet 
                    code={'git clone [url]'} 
                    description={'Downloads a project and its entire version history'} 
                /><br/><br/>



                <Heading id={'makeChanges'} heading={'MAKE CHANGES'} />
                <SubHeading 
                    subheading={'Review edits and craft a commit transaction'} />
                <CodeSnippet 
                    code={'git status'} 
                    description={'Lists all new or modifies files to be commited'} 
                />
                <CodeSnippet 
                    code={'git diff'} 
                    description={'Shows file differences not yet staged'} 
                />
                <CodeSnippet 
                    code={'git add [file]'} 
                    description={'Snapshots the file in preparation for versioning'} 
                />
                <CodeSnippet 
                    code={'git diff --staged'} 
                    description={'Shows file differences between staging and the last file version'} 
                />
                <CodeSnippet 
                    code={'git reset [file]'} 
                    description={'Unstages the file, but preserve its content'} 
                />
                <CodeSnippet 
                    code={'git commit -m "[descriptive message]"'} 
                    description={'Records file snapshots permanently in version history'} 
                /><br/><br/>



                <Heading id={'groupChanges'} heading={'GROUP CHANGES'} />
                <SubHeading 
                    subheading={'Name a series of commits and combine completed efforts'} />
                <CodeSnippet 
                    code={'git branch'} 
                    description={'Lists all local branches in the current repository'} 
                />
                <CodeSnippet 
                    code={'git branch [branch-name]'} 
                    description={'Creates a new branch'} 
                />
                <CodeSnippet 
                    code={'git checkout [branch-name]'} 
                    description={'Switches to the specified branch and updates the working directory'} 
                />
                <CodeSnippet 
                    code={'git merge [branch]'} 
                    description={"Combines the specified branch's history into the current branch"} 
                />
                <CodeSnippet 
                    code={'git branch -d [branch name]'} 
                    description={'Deletes the specified branch'} 
                /><br/><br/>



                <Heading id={'refactorFilenames'} heading={'REFACTOR FILENAMES'} />
                <SubHeading 
                    subheading={'Relocates and remove vesioned files'} />
                <CodeSnippet 
                    code={'git rm [file]'} 
                    description={'Deletes the file from the working directory and stages the deletion'} 
                />
                <CodeSnippet 
                    code={'git rm --cached [file]'} 
                    description={'Removes the file from version control but preserves the file locally'} 
                />
                <CodeSnippet 
                    code={'git mv [file-original] [file-renamed]'} 
                    description={'Changes the file name and prepares it for commit'} 
                /><br/><br/>



                <Heading id={'suppressTracking'} heading={'SUPPRESS TRACKING'} />
                <SubHeading 
                    subheading={'Exclude temporary files and path'} />
                <CodeSnippet 
                    code={'*.log build/ temp-*'} 
                    description={'A text file named .gitignore suppresses accidental versioning of files and paths matching the specified patterns'} 
                />
                <CodeSnippet 
                    code={'git ls-files --other --ignored --exclude-standard'} 
                    description={'Lists all ignored files in this project'} 
                /><br/><br/>



                <Heading id={'saveFragments'} heading={'SAVE FRAGMENTS'} />
                <SubHeading 
                    subheading={'Shelve and restore incomplete changes'} />
                <CodeSnippet 
                    code={'git stash'} 
                    description={'Restores the most recently stashed files'} 
                />
                <CodeSnippet 
                    code={'git stash pop'} 
                    description={'Restores the most recently stashed files'} 
                />
                <CodeSnippet 
                    code={'git stash list'} 
                    description={'Lists all stashed changesets'} 
                />
                <CodeSnippet 
                    code={'git stash drop'} 
                    description={'Discards the most recently stashed changeset'} 
                /><br/><br/>



                <Heading id={'reviewHistory'} heading={'REVIEW HISTORY'} />
                <SubHeading 
                    subheading={'Browse and inspect the evolution of project files'} />
                <CodeSnippet 
                    code={'git log'} 
                    description={'Lists version history for the current branch'} 
                />
                <CodeSnippet 
                    code={'git log --follow [file]'} 
                    description={'Lists version history for a file, including renames'} 
                />
                <CodeSnippet 
                    code={'git diff [first-branch]...[second-branch]'} 
                    description={'Shows content differences between two branches'} 
                />
                <CodeSnippet 
                    code={'git show [commit]'} 
                    description={'Outputs metadata and content changes of the specified commit'} 
                /><br/><br/>



                <Heading id={'redoCommits'} heading={'REDO COMMITS'} />
                <SubHeading 
                    subheading={'Erase mistakes and craft replacement history'} />
                <CodeSnippet 
                    code={'git reset [commit]'} 
                    description={'Undoes all commits after [commit], preserving changes locally'} 
                />
                <CodeSnippet 
                    code={'git reset --hard [commit]'} 
                    description={'Discards all history and changes back to the specified commit'} 
                /><br/><br/>



                <Heading id={'synchronizeChanges'} heading={'SYNCHRONIZE CHANGES'} />
                <SubHeading 
                    subheading={'Register a repository bookmark and exchange version history'} />
                <CodeSnippet 
                    code={'git fetch [bookmark]'} 
                    description={'Downloads all history from the repository bookmark'} 
                />
                <CodeSnippet 
                    code={'git merge [bookmark]/[branch]'} 
                    description={"Combines bookmarks's branch into curernt local branch"} 
                />
                <CodeSnippet 
                    code={'git push [alias] [branch]'} 
                    description={'Uploads all local branch commits to GitHub'} 
                />
                <CodeSnippet 
                    code={'git pull'} 
                    description={'Downloads bookmark history and incorporates changes'} 
                /><br/><br/>
            </div>

        </div>
    )
}

export default Rightside;
