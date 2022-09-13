
import "./Roadmap.css"

import $ from "jquery"

export default function () {
    $(".timeline").click(function (e) {
        e.preventDefault();
        if ($(this).hasClass("slide-open")) {
            $(this).addClass("slide-open");
        } else if (!$(this).hasClass("slide-open")) {
            $(".timeline").removeClass("slide-open");
            $(this).addClass("slide-open");
        }
    });

    return (
        
            <div id="timeline">
            <div class="wrapper">
                
                <div class="timeline timeline-one slide-open">
                    <div class="year-wrapper">
                        <div class="year-wrapper-year">
                            <h2 class="year"> 2018 </h2>
                        </div>
                        <div class="year-content-wrap">
                            <div class="year-content">
                                <h5 class="year-wrapper-title">
                                    What is Lorem Ipsum?
                                </h5>
                                <p class="year-wrapper-text">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                </p>
                            </div>

                            <div class="year-wrapper-image">
                                <img src="https://22107448.fs1.hubspotusercontent-na1.net/hubfs/22107448/unsplash_xkArbdUcUeE.png" alt=""/>
        </div>
                            </div>

                        </div>
                    </div>
                   
                    <div class="timeline timeline-two">
                        <div class="year-wrapper">
                            <div class="year-wrapper-year">
                                <h2 class="year"> 2019 </h2>
                            </div>
                            <div class="year-content-wrap">
                                <div class="year-content">
                                    <h5 class="year-wrapper-title">
                                        What is Lorem Ipsum?
                                    </h5>
                                    <p class="year-wrapper-text">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                    </p>
                                </div>

                                <div class="year-wrapper-image">
                                    <img src="https://22107448.fs1.hubspotusercontent-na1.net/hubfs/22107448/unsplash_xkArbdUcUeE.png" alt=""/>
        </div>
                                </div>

                            </div>
                        </div>
                       
                        <div class="timeline timeline-three">
                            <div class="year-wrapper">
                                <div class="year-wrapper-year">
                                    <h2 class="year"> 2020 </h2>
                                </div>
                                <div class="year-content-wrap">
                                    <div class="year-content">
                                        <h5 class="year-wrapper-title">
                                            What is Lorem Ipsum?
                                        </h5>
                                        <p class="year-wrapper-text">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                        </p>
                                    </div>

                                    <div class="year-wrapper-image">
                                        <img src="https://22107448.fs1.hubspotusercontent-na1.net/hubfs/22107448/unsplash_xkArbdUcUeE.png" alt=""/>
        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
            </div> 
    );
}