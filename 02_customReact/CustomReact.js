// Function to render element1
function customRender(element, target){
    const domElement=document.createElement(element.type);
    domElement.innerHTML=element.children;
    domElement.setAttribute('href', element.props.href);
    domElement.setAttribute('target', element.props.target);
    target.appendChild(domElement);
}

// Function to render element2
function customRender2(reactElement, target){
    const virtualDOM=document.createElement(reactElement.type);
    virtualDOM.setAttribute('id', reactElement.props.id);
    virtualDOM.innerHTML=reactElement.children;
    target.appendChild(virtualDOM);
}

// Funtion to render all Elements
function universalRenderer(reactElement, target){
    const virtualDOM= document.createElement(reactElement.type);
    virtualDOM.innerHTML=reactElement.children;
    for (const prop in reactElement.props) {
        virtualDOM.setAttribute(prop, reactElement.props[prop]);
    }  
    target.appendChild(virtualDOM);
}

// Element 1
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank',
    },
    children: 'Click Me',
}

// Element 2
const reactElement2={
    type: 'p',
    props:{
        id: 'para',
    },
    children: 'This is a paragraph',
    
}

const root = document.querySelector('#root');

universalRenderer(reactElement, root);
universalRenderer(reactElement2, root);


//To prevent copy
document.addEventListener('copy', (event)=>{
    event.preventDefault();
})
document.addEventListener('contextmenu', (event)=>{
    event.preventDefault();
})