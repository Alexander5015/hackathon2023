import React, { useState } from "react";
import Carousel from "../Components/Carousel/Carousel";
import Navigation from "../Components/Navigation/Navigation";

function ShareAnActivity() {
    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [website, setWebsite] = useState("");
    
    return (
        <div>
            <Navigation />
            <div>
                <h3>Share an activity</h3>
                <div>
                    <Carousel
                        dataArray={[
                            {
                                title: "Event title",
                                field: {
                                    type: "text",
                                    name: "event_title",
                                    placeholder: "Enter title for the event",
                                    handler: (e) => setTitle(e.target.value),
                                },
                            },
                            {
                                title: "Event description",
                                field: {
                                    type: "text",
                                    name: "event_description",
                                    placeholder: "Enter description for the event",
                                    handler: (e) => setDescription(e.target.value),
                                },
                            },
                            {
                                title: "Event website",
                                field: {
                                    type: "text",
                                    name: "event_website",
                                    placeholder: "Enter event website",
                                    handler: (e) => setWebsite(e.target.value),
                                },
                            },
                        ]}
                    />
                </div>
            </div>
        </div>
    );
}

export default ShareAnActivity;
