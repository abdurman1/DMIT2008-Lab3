import { addToDoModel } from '../models/toDoListModel'; 

export function addToDoController() {
    const form = document.querySelector('#add-todo-form');

    form.addEventListener('submit', handleSubmit);

    function handleSubmit(event) {
        event.preventDefault(); 
        const formData = new FormData(form);
        const todo = formData.get('todo');
        const category = formData.get('category');
        const status = formData.get('status');

        
        addToDoModel(todo, category, status); 


        form.reset();
    }
}
