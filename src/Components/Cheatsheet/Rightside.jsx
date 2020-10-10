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
                <Heading id={'Hello'} heading={'heading'} />

                {/* sub-heading */}
                <SubHeading subheading={'subhead'} />

                {/* code snippet and description */}
                <CodeSnippet code={'git init'} description={'heyyy'} />



{/* sub-heading */}

{/* code snippet and description */}
<CodeSnippet code={'git init'} description={'heyyy'} />


{/* sub-heading */}

{/* code snippet and description */}
<CodeSnippet code={'git init'} description={'heyyy'} />



{/* sub-heading */}

{/* code snippet and description */}
<CodeSnippet code={'git init'} description={'heyyy'} />


<Heading heading={'heading'} />

{/* sub-heading */}

{/* code snippet and description */}
<CodeSnippet code={'git init'} description={'heyyy'} />




{/* code snippet and description */}
<CodeSnippet code={'git init'} description={'heyyy'} />


{/* sub-heading */}

{/* code snippet and description */}
<CodeSnippet code={'git init'} description={'heyyy'} />



{/* sub-heading */}

{/* code snippet and description */}
<CodeSnippet code={'git init'} description={'heyyy'} />


<Heading id={'last'} heading={'heading'} />

{/* sub-heading */}
<SubHeading subheading={'subhead'} />

{/* code snippet and description */}
<CodeSnippet code={'git init'} description={'heyyy'} />
<CodeSnippet code={'git init'} description={'heyyy'} />
<CodeSnippet code={'git init'} description={'heyyy'} />
<CodeSnippet code={'git init'} description={'heyyy'} />
<CodeSnippet code={'git init'} description={'heyyy'} />
<CodeSnippet code={'git init'} description={'heyyy'} />
<CodeSnippet code={'git init'} description={'heyyy'} />
<CodeSnippet code={'git init'} description={'heyyy'} />
<CodeSnippet code={'git init'} description={'heyyy'} />



            </div>

        </div>
    )
}

export default Rightside;
