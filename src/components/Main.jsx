import React from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"
import { getRecipeFromChefClaude, getRecipeFromMistral } from "../../ai"

export default function Main(){
    const [ingredients, setIngredients] = React.useState([])
    const [recipe, setRecipe] = React.useState("")

    const recipeSection = React.useRef(null)
    console.log(recipeSection)
    React.useEffect(() => {
        if (recipeSection.current !== null && recipe !== ""){
            recipeSection.current.scrollIntoView({behavior: "smooth"})
        }
    }, [recipe])


    async function handleGetRecipe(){
        // response = getRecipeFromChefClaude(ingredients)
        // console.log(response)
        const response2 = await getRecipeFromMistral(ingredients)
        setRecipe(response2)
    }

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
            {ingredients.length > 0 && 
            <IngredientsList 
            ref={recipeSection}
            ingredients={ingredients} 
            handleGetRecipe={handleGetRecipe}/>}

            {recipe && <ClaudeRecipe recipe={recipe}/>}
        </main>
    )
}