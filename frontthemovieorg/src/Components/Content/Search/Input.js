import React from "react";

export function Input(props) {
    const search = {
        search: props.search,
        change: props.value
    }
    return (
        <div>
            <div className="row justify-content-center bg-dark">
                <div className="col-10 pb-4">
                    <form>
                        <input className="form-control"
                               type="search"
                               placeholder="Procurar"
                               aria-label="search"
                               value={search.search}
                               onChange={search.change}
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}