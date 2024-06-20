import '../style/Category.css'

function Categories({categories, setActiveCategory, activeCategory}) {

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    return (
        <div className="category-layout">

            <select
                value= {activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
            >
                <option value=''>--- All ---</option>
                {categories.map((cat) => (

                    <option key={cat} value={cat}>{capitalizeFirstLetter(cat)}</option>
                ))}
            </select>



        </div>
    )
}

export default Categories