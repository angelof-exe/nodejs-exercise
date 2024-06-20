function createComponent(data) {
    return `
            
                 <!-- mettere un id, così da eliminarlo al click della x-->
                        <div class="conf_title">
                            <div class="card_title flex bold" id="card_title">${data.title}</div>
                            <img src="./../static/close_FILL0_wght400_GRAD0_opsz24.svg" alt="close" class="close_butt">
                            
                        </div>
                        <div class="conf_param">

                            <div class="param_div">
                                <p class="medium param_txt">Input Frequency:</p>
                                <p class="bold param_num">${data["freq"]} MHz</p>
                            </div>
                            <div class="param_div">
                                <p class="medium param_txt">Bandwidth Filter:</p>
                                <p class="bold param_num">${data["bw"]} MHz</p>
                            </div>
                            <div class="param_div">
                                <p class="medium param_txt">Threshold:</p>
                                <p class="bold param_num">${data["th"]} dBm</p>
                            </div>

                        </div>

                    
                
            `;
}