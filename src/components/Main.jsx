import React from "react"

export default function Main(){
    const [ingredients, setIngredients] = React.useState(["Chicken", "Oregano", "Tomatoes"])

    const ingredientsListItems =  ingredients.map((ingredient) =>
            <li key={ingredient}> {ingredient}</li>
        )

    //This function has same functionality as the function below 
    //But it is provided as value to onSubmit attribue in the form element
    function handleSubmit(event){
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("new-ingredient")
        console.log(newIngredient)
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        event.currentTarget.reset()
    } 
    
    //This function has same functionality as the function above 
    //but it is provided as value to action attribue in the form element
    function addIngredient(formData){
        const newIngredient = formData.get("new-ingredient")
        console.log(newIngredient) 
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }
    
    return(
        <main className="main-content">
            <form className="main-form" 
            action={addIngredient}
            //onSubmit={handleSubmit}
            >
                <input 
                    type="text" 
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name = "new-ingredient" />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}