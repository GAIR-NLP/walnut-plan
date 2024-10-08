"use strict";(self.webpackChunkwalnut_plan=self.webpackChunkwalnut_plan||[]).push([[8430],{8016:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var r=n(4848),s=n(8453);const o={sidebar_position:1},i="How to Construct Reward Model?",l={id:"projects/o1_replicate/exploration_journey/reward_model",title:"How to Construct Reward Model?",description:"To build an effective reward model, the first step is determining the appropriate granularity. Rather than evaluating only final results, we focus on step-level granularity to enhance LLM capabilities in reflection and backtracking. Using fine-tuning data, we distinguish solutions by line numbers to capture more detailed cognitive processes.",source:"@site/docs/projects/o1_replicate/2_exploration_journey/05_reward_model.md",sourceDirName:"projects/o1_replicate/2_exploration_journey",slug:"/projects/o1_replicate/exploration_journey/reward_model",permalink:"/walnut-plan/docs/projects/o1_replicate/exploration_journey/reward_model",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"How to Construct Long Thoughts?",permalink:"/walnut-plan/docs/projects/o1_replicate/exploration_journey/construct_longthought"},next:{title:"How to Construct an On-policy Reasoning Tree?",permalink:"/walnut-plan/docs/projects/o1_replicate/exploration_journey/construct_policy_tree"}},d={},a=[{value:"Meta-Evaluation",id:"meta-evaluation",level:2}];function c(e){const t={em:"em",h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"how-to-construct-reward-model",children:"How to Construct Reward Model?"})}),"\n",(0,r.jsx)(t.p,{children:"To build an effective reward model, the first step is determining the appropriate granularity. Rather than evaluating only final results, we focus on step-level granularity to enhance LLM capabilities in reflection and backtracking. Using fine-tuning data, we distinguish solutions by line numbers to capture more detailed cognitive processes."}),"\n",(0,r.jsx)(t.h2,{id:"meta-evaluation",children:"Meta-Evaluation"}),"\n",(0,r.jsx)(t.p,{children:"We tested both open-source and proprietary reward models on subsets of the PRM800K and MR-GSM8K datasets, comparing their performance. The results, presented in our tables, show that O1-mini consistently performs best across different datasets."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Model"})}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"F1 score"})})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"o1-mini"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"0.855"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"GPT-4o-mini"}),(0,r.jsx)(t.td,{children:"0.722"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Math-shepherd"}),(0,r.jsx)(t.td,{children:"0.734"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ReasonEval-7B"}),(0,r.jsx)(t.td,{children:"0.728"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ReasonEval-34B"}),(0,r.jsx)(t.td,{children:"0.735"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Results on the subset of MR-GSM8K"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Model"})}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"F1 score"})})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"GPT-4o-mini"}),(0,r.jsx)(t.td,{children:"0.756"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"o1-mini"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"0.880"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"o1-preview"}),(0,r.jsx)(t.td,{children:"0.867"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Results on the subset of PRM800K"})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var r=n(6540);const s={},o=r.createContext(s);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);