const container = document.querySelector('#test');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);
