
export default function(){
    return(
        <div>
            <h1>To Do list</h1>
                <div className="max-w-xs my-2 overflow-hidden rounded shadow-lg">
                    <div className="px-6 py-4">
                        <div className="mb-2 text-xl font-bold">Todolist</div>
                            <form className="flex flex-col" onSubmit={props}>
                                <label htmlFor="name" className="mb-2 italic">Title</label>
                                    <input
                                    className="mb-4 border-b-2"
                                    id="name"
                                    name="nameS"
                                    type="text"
                                    autocomplete="name"
                                    required
                                    />
                                        <button
                                        type="submit"
                                        className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
                                        
                                        >
                                        
                                        Submit
                                        </button>
                                </form>
                        </div>
                    </div>
        </div>

        
    )
}