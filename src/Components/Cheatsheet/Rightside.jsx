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
                <Heading heading={'heading'} />

                {/* sub-heading */}
                <SubHeading subheading={'subhead'} />

                {/* code snippet and description */}
                <CodeSnippet code={'git init'} description={'heyyy'} />



{/* sub-heading */}
<SubHeading subheading={'subhead'} />

{/* code snippet and description */}
<CodeSnippet code={'git init'} description={'heyyy'} />


{/* sub-heading */}
<SubHeading subheading={'subhead'} />

{/* code snippet and description */}
<CodeSnippet code={'git init'} description={'heyyy'} />



{/* sub-heading */}
<SubHeading subheading={'subhead'} />

{/* code snippet and description */}
<CodeSnippet code={'git init'} description={'heyyy'} />


<Heading heading={'heading'} />

{/* sub-heading */}
<SubHeading subheading={'subhead'} />

{/* code snippet and description */}
<CodeSnippet code={'git init'} description={'heyyy'} />



<SubHeading subheading={'subhead'} />

{/* code snippet and description */}
<CodeSnippet code={'git init'} description={'heyyy'} />


{/* sub-heading */}
<SubHeading subheading={'subhead'} />

{/* code snippet and description */}
<CodeSnippet code={'git init'} description={'heyyy'} />



{/* sub-heading */}
<SubHeading subheading={'subhead'} />

{/* code snippet and description */}
<CodeSnippet code={'git init'} description={'heyyy'} />


<Heading heading={'heading'} />

{/* sub-heading */}
<SubHeading subheading={'subhead'} />

{/* code snippet and description */}
<CodeSnippet code={'git init'} description={'heyyy'} />


            </div>

        </div>
    )
}

export default Rightside;
