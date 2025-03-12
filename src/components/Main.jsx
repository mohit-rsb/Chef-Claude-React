import React from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"

export default function Main(){
    const [ingredients, setIngredients] = React.useState([])
    const [recipeShown, setRecipeShown] = React.useState(false)

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

    function handleGetRecipe(){
        setRecipeShown(!recipeShown)
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
            {ingredients.length > 0 && 
            <IngredientsList ingredients={ingredients} handleGetRecipe={handleGetRecipe}/>}


            {recipeShown && <ClaudeRecipe />}
        </main>
    )
}