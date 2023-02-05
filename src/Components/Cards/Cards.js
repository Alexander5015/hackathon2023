import React, { useState } from "react";

function Cards() {

    return (
        <div>
            <FormView
                formHead={"Title"}
                formFoot={null}
                formData={{
                    inputs: [
                        {
                            key: "title",
                            type: "text",
                            name: "event_title",
                            placeholder: "Enter title for the event",
                            handler: (e) => setTitle(e.target.value),
                        },
                    ],
                }}
            />
        </div>
    );
}

export default Cards;
