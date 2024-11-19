document.addEventListener("DOMContentLoaded", function() {
    const chatInput = document.getElementById("chat");
    const chatDisplay = document.getElementById("Chatp");
    const chatDiv = document.getElementById("chat2");
    const sendButton = document.querySelector('.icon');
    const Setting = document.getElementById("Setting");
    const panel = document.getElementById("ai-settings-panel");
    const settingMaxLengthInput = document.getElementById("setting-max-length");
    const saveSettings = document.getElementById("save-settings");
    const usermsg = document.getElementById("usermsg");
    const botmsg = document.getElementById("botmsg");

    Setting.addEventListener("click", function() {
        panel.style.display = panel.style.display === "none" ? "block" : "none";
    });

    function updateChatDisplay() {
        if (!chatInput) return;
        let inputValue = chatInput.value.trim();

        if (inputValue === '1') {
            chatDisplay.textContent = '1';
            chatDiv.style.display = 'none';
        } else if (inputValue === '') {
            chatDisplay.textContent = '';
            chatDiv.style.display = 'none';
        } else {
            chatDiv.style.display = 'block';
            const maxLineLength = 24;
            let wrappedText = '';
            for (let i = 0; i < inputValue.length; i += maxLineLength) {
                wrappedText += inputValue.slice(i, i + maxLineLength) + '\n';
            }
            chatDisplay.textContent = wrappedText.trim();
        }
    }

    if (chatInput) {
        chatInput.addEventListener("input", updateChatDisplay);
        updateChatDisplay();
    }

    sendButton.addEventListener("click", function() {
        if (usermsg) {
            if (chatDisplay) {
                chatDisplay.textContent = usermsg.value;
            }
            usermsg.value = '';
        }
    });

    const charButton = document.getElementById("chatbarbuttonn");
    const chatbar = document.getElementById("chatbar");

    let isExpanded = false;

    charButton.addEventListener("click", function() {
        if (isExpanded) {
            chatbar.style.width = "0px";
            charButton.style.left = "0px"; 
            charButton.textContent = ">";
            chatbar.classList.remove('expanded');
            chatbar.classList.add('collapsed');
            charButton.classList.remove('expanded');
            charButton.classList.add('collapsed');
        } else {
            chatbar.style.width = "130px";
            charButton.style.left = "130px";
            charButton.textContent = "<";
            chatbar.classList.remove('collapsed');
            chatbar.classList.add('expanded');
            charButton.classList.remove('collapsed');
            charButton.classList.add('expanded');
        }
        isExpanded = !isExpanded;
    });
});

let gptIsSelected = false;
let gpt4IsSelected = false;
let claudeIsSelected = false;
let openRouterIsSelected = false;
let geminiIsSelected = false;
let llama2IsSelected = false;
let mistralIsSelected = false;
let palmIsSelected = false;
let anthropicIsSelected = false;
let falconIsSelected = false;
let gptNeoIsSelected = false;
let bloomIsSelected = false;
let optIsSelected = false;
let dollyIsSelected = false;
let stablelmIsSelected = false;
let pythiaIsSelected = false;
let vicunaIsSelected = false;
let mptIsSelected = false;

const openaikey = "";

document.addEventListener("DOMContentLoaded", function() {
    const saveSettings = document.getElementById("save-settings");
    const settingMaxLengthInput = document.getElementById("setting-max-length");
    
    document.getElementById("ai-model").addEventListener("change", function() {
        const selectedValue = document.getElementById("ai-model").value;
        // Reset all flags
        gptIsSelected = false;
        gpt4IsSelected = false;
        claudeIsSelected = false;
        openRouterIsSelected = false;
        geminiIsSelected = false;
        llama2IsSelected = false;
        mistralIsSelected = false;
        palmIsSelected = false;
        anthropicIsSelected = false;
        falconIsSelected = false;
        gptNeoIsSelected = false;
        bloomIsSelected = false;
        optIsSelected = false;
        dollyIsSelected = false;
        stablelmIsSelected = false;
        pythiaIsSelected = false;
        vicunaIsSelected = false;
        mptIsSelected = false;

        switch(selectedValue) {
            case "gpt-3.5":
                gptIsSelected = true;
                break;
            case "gpt-4":
                gpt4IsSelected = true;
                break;
            case "claude":
                claudeIsSelected = true;
                break;
            case "Openrouter":
                openRouterIsSelected = true;
                break;
            case "gemini":
                geminiIsSelected = true;
                break;
            case "llama2":
                llama2IsSelected = true;
                break;
            case "mistral":
                mistralIsSelected = true;
                break;
            case "palm":
                palmIsSelected = true;
                break;
            case "anthropic":
                anthropicIsSelected = true;
                break;
            case "falcon":
                falconIsSelected = true;
                break;
            case "gpt-neo":
                gptNeoIsSelected = true;
                break;
            case "bloom":
                bloomIsSelected = true;
                break;
            case "opt":
                optIsSelected = true;
                break;
            case "dolly":
                dollyIsSelected = true;
                break;
            case "stablelm":
                stablelmIsSelected = true;
                break;
            case "pythia":
                pythiaIsSelected = true;
                break;
            case "vicuna":
                vicunaIsSelected = true;
                break;
            case "mpt":
                mptIsSelected = true;
                break;
        }
    }); 

    saveSettings.addEventListener("click", function() {
        const settingMaxLength = parseInt(settingMaxLengthInput.value, 10);
        if (settingMaxLength > 4096) {
            window.alert("ERR: Max length exceeds limit!");
            return;
        } 

        if (gptIsSelected || gpt4IsSelected) {
            openai();
        } else if (claudeIsSelected) {
            claude();
        } else if (openRouterIsSelected) {
            openRouter();
        } else if (llama2IsSelected) {
            llama2();
        } else if (mistralIsSelected) {
            mistral();
        } else if (palmIsSelected) {
            palm();
        } else if (anthropicIsSelected) {
            anthropic();
        } else if (falconIsSelected) {
            falcon();
        } else if (gptNeoIsSelected) {
            gptNeo();
        } else if (bloomIsSelected) {
            bloom();
        } else if (optIsSelected) {
            opt();
        } else if (dollyIsSelected) {
            dolly();
        } else if (stablelmIsSelected) {
            stablelm();
        } else if (pythiaIsSelected) {
            pythia();
        } else if (vicunaIsSelected) {
            vicuna();
        } else if (mptIsSelected) {
            mpt();
        }
    });
});
const claudeKey = "";
const openRouterKey = "";
const mistralKey = "";
const palmKey = "";
const anthropicKey = "";
const falconKey = "";
const gptNeoKey = "";
const bloomKey = "";
const optKey = "";
const dollyKey = "";
const stablelmKey = "";
const pythiaKey = "";
const vicunaKey = "";
const mptKey = "";

let temperature = 0.7;
let maxTokens = 1000;

document.addEventListener("DOMContentLoaded", function() {
    const saveApiSettings = document.getElementById("save-api-settings");
    if (saveApiSettings) {
        saveApiSettings.addEventListener("click", function() {
            const googleKey = document.getElementById("google-key").value;
            const yiApiKey = document.getElementById("yi-key").value;
            
            if (googleKey) geminiKey = googleKey;
            if (yiApiKey) yiKey = yiApiKey;
            
            const modelPreset = document.getElementById("model-preset").value;
            const responseStyle = document.getElementById("response-style").value;
            
            switch(modelPreset) {
                case "creative":
                    temperature = 0.9;
                    break;
                case "balanced":
                    temperature = 0.7;
                    break;
                case "precise":
                    temperature = 0.3;
                    break;
            }
            
            switch(responseStyle) {
                case "concise":
                    maxTokens = 500;
                    break;
                case "detailed":
                    maxTokens = 1000;
                    break;
                case "technical":
                    maxTokens = 1500;
                    break;
                case "casual":
                    maxTokens = 800;
                    break;
            }
        });
    }
});

async function openai() {
    const userMsgValue = usermsg ? usermsg.value : '';
    const model = gptIsSelected ? "gpt-3.5-turbo" : "gpt-4";

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${openaikey}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: model,
            messages: [
                { role: "user", content: userMsgValue }
            ],
            max_tokens: maxTokens,
            temperature: temperature
        })
    });

    const data = await response.json();
    botmsg.textContent = data.choices[0].message.content;
}

async function claude() {
    const userMsgValue = usermsg ? usermsg.value : '';
    const url = 'https://api.cohere.ai/v1/generate';

    const headers = {
        'Authorization': `Bearer ${Cohereapi}`,
        'Content-Type': 'application/json'
    };

    const body = JSON.stringify({
        model: 'command',
        prompt: userMsgValue,
        max_tokens: maxTokens,
        temperature: temperature
    });

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: body
        });

        const data = await response.json();
        if (response.ok) {
            const botmsg = document.getElementById("Charmessage");
            botmsg.textContent = data.text;
        } else {
            console.error('Error:', data);
        }
    } catch (error) {
        console.error('Fetch Error:', error);
    }
}

async function openRouter() {
    const userMsgValue = usermsg ? usermsg.value : '';
        
    try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${openRouterKey}`,
                "HTTP-Referer": window.location.origin,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "openai/gpt-3.5-turbo",
                messages: [
                    { role: "user", content: userMsgValue }
                ],
                max_tokens: maxTokens,
                temperature: temperature
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        const botmsg = document.getElementById("botmsg");
        if (result?.choices?.[0]?.message?.content) {
            botmsg.textContent = result.choices[0].message.content;
        } else {
            console.error("Invalid response structure:", result);
            botmsg.textContent = "Error: Failed to get valid response from OpenRouter API";
        }
    } catch (error) {
        console.error("OpenRouter API Error:", error);
        botmsg.textContent = `Error: ${error.message || "Failed to communicate with OpenRouter API"}`;
    }
}

async function llama2() {
    const userMsgValue = usermsg ? usermsg.value : '';
    const API_URL = "https://api.llama2.ai/v1/chat/completions";
    
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${llama2Key}`
            },
            body: JSON.stringify({
                model: "llama-2-70b-chat",
                messages: [
                    { role: "user", content: userMsgValue }
                ],
                temperature: temperature,
                max_tokens: maxTokens,
                top_p: 0.95,
                frequency_penalty: 0,
                presence_penalty: 0
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        const botmsg = document.getElementById("Charmessage");

        if (result?.choices?.[0]?.message?.content) {
            botmsg.textContent = result.choices[0].message.content;
        } else {
            throw new Error("Invalid response structure");
        }
    } catch (error) {
        console.error("Llama 2 API Error:", error);
        const botmsg = document.getElementById("Charmessage");
        botmsg.textContent = `Error: ${error.message || "Failed to communicate with Llama 2 API"}`;
    }
}

async function mistral() {
    const userMsgValue = usermsg ? usermsg.value : '';
    const API_URL = "https://api.mistral.ai/v1/chat/completions";
    
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${mistralKey}`
            },
            body: JSON.stringify({
                model: "mistral-medium",
                messages: [
                    { role: "user", content: userMsgValue }
                ],
                temperature: temperature,
                max_tokens: maxTokens
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        if (result?.choices?.[0]?.message?.content) {
            botmsg.textContent = result.choices[0].message.content;
        } else {
            throw new Error("Invalid response structure");
        }
    } catch (error) {
        console.error("Mistral API Error:", error);
        botmsg.textContent = `Error: ${error.message || "Failed to communicate with Mistral API"}`;
    }
}

async function palm() {
    const userMsgValue = usermsg ? usermsg.value : '';
    const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/text-bison-001:generateText";
    
    try {
        const response = await fetch(`${API_URL}?key=${palmKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt: {
                    text: userMsgValue
                },
                temperature: temperature,
                maxOutputTokens: maxTokens
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        if (result?.candidates?.[0]?.output) {
            botmsg.textContent = result.candidates[0].output;
        } else {
            throw new Error("Invalid response structure");
        }
    } catch (error) {
        console.error("PaLM API Error:", error);
        botmsg.textContent = `Error: ${error.message || "Failed to communicate with PaLM API"}`;
    }
}

async function anthropic() {
    const userMsgValue = usermsg ? usermsg.value : '';
    const API_URL = "https://api.anthropic.com/v1/messages";
    
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': anthropicKey,
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
                model: "claude-3-opus",
                messages: [
                    { role: "user", content: userMsgValue }
                ],
                max_tokens: maxTokens,
                temperature: temperature
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        if (result?.content?.[0]?.text) {
            botmsg.textContent = result.content[0].text;
        } else {
            throw new Error("Invalid response structure");
        }
    } catch (error) {
        console.error("Anthropic API Error:", error);
        botmsg.textContent = `Error: ${error.message || "Failed to communicate with Anthropic API"}`;
    }
}

async function falcon() {
    const userMsgValue = usermsg ? usermsg.value : '';
    const API_URL = "https://api.aimlapi.com/v1";
    
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${falconKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: "falcon-40b",
                messages: [
                    { role: "user", content: userMsgValue }
                ],
                temperature: temperature,
                max_tokens: maxTokens
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        if (result?.choices?.[0]?.message?.content) {
            botmsg.textContent = result.choices[0].message.content;
        } else {
            throw new Error("Invalid response structure");
        }
    } catch (error) {
        console.error("Falcon API Error:", error);
        botmsg.textContent = `Error: ${error.message || "Failed to communicate with Falcon API"}`;
    }
}

async function gptNeo() {
    const userMsgValue = usermsg ? usermsg.value : '';
    const API_URL = "https://api.eleuther.ai/v1/completions";

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${gptNeoKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: "gpt-neo-2.7B",
                prompt: userMsgValue,
                max_tokens: maxTokens,
                temperature: temperature
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        if (result?.choices?.[0]?.text) {
            botmsg.textContent = result.choices[0].text;
        } else {
            throw new Error("Invalid response structure");
        }
    } catch (error) {
        console.error("GPT-Neo API Error:", error);
        botmsg.textContent = `Error: ${error.message || "Failed to communicate with GPT-Neo API"}`;
    }
}

async function bloom() {
    const userMsgValue = usermsg ? usermsg.value : '';
    const API_URL = "https://api.bigscience.ai/v1/completions";

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${bloomKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: "bloom",
                prompt: userMsgValue,
                max_tokens: maxTokens,
                temperature: temperature
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        if (result?.choices?.[0]?.text) {
            botmsg.textContent = result.choices[0].text;
        } else {
            throw new Error("Invalid response structure");
        }
    } catch (error) {
        console.error("BLOOM API Error:", error);
        botmsg.textContent = `Error: ${error.message || "Failed to communicate with BLOOM API"}`;
    }
}

async function opt() {
    const userMsgValue = usermsg ? usermsg.value : '';
    const API_URL = "https://api.meta.ai/v1/completions";

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${optKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: "opt-175b",
                prompt: userMsgValue,
                max_tokens: maxTokens,
                temperature: temperature
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        if (result?.choices?.[0]?.text) {
            botmsg.textContent = result.choices[0].text;
        } else {
            throw new Error("Invalid response structure");
        }
    } catch (error) {
        console.error("OPT API Error:", error);
        botmsg.textContent = `Error: ${error.message || "Failed to communicate with OPT API"}`;
    }
}

async function dolly() {
    const userMsgValue = usermsg ? usermsg.value : '';
    const API_URL = "https://api.databricks.ai/v1/completions";

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${dollyKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: "dolly-v2",
                prompt: userMsgValue,
                max_tokens: maxTokens,
                temperature: temperature
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        if (result?.choices?.[0]?.text) {
            botmsg.textContent = result.choices[0].text;
        } else {
            throw new Error("Invalid response structure");
        }
    } catch (error) {
        console.error("Dolly API Error:", error);
        botmsg.textContent = `Error: ${error.message || "Failed to communicate with Dolly API"}`;
    }
}

async function stablelm() {
    const userMsgValue = usermsg ? usermsg.value : '';
    const API_URL = "https://api.stability.ai/v1/completions";

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${stablelm}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: "stablelm-3b",
                prompt: userMsgValue,
                max_tokens: maxTokens,
                temperature: temperature
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        if (result?.choices?.[0]?.text) {
            botmsg.textContent = result.choices[0].text;
        } else {
            throw new Error("Invalid response structure");
        }
    } catch (error) {
        console.error("StableLM API Error:", error);
        botmsg.textContent = `Error: ${error.message || "Failed to communicate with StableLM API"}`;
    }
}

async function pythia() {
    const userMsgValue = usermsg ? usermsg.value : '';
    const API_URL = "https://api.eleuther.ai/v1/completions";

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${pythiaKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: "pythia-12b",
                prompt: userMsgValue,
                max_tokens: maxTokens,
                temperature: temperature
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        if (result?.choices?.[0]?.text) {
            botmsg.textContent = result.choices[0].text;
        } else {
            throw new Error("Invalid response structure");
        }
    } catch (error) {
        console.error("Pythia API Error:", error);
        botmsg.textContent = `Error: ${error.message || "Failed to communicate with Pythia API"}`;
    }
}

async function vicuna() {
    const userMsgValue = usermsg ? usermsg.value : '';
    const API_URL = "https://api.lmsys.ai/v1/chat/completions";

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${vicunaKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: "vicuna-13b",
                messages: [
                    { role: "user", content: userMsgValue }
                ],
                max_tokens: maxTokens,
                temperature: temperature
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        if (result?.choices?.[0]?.message?.content) {
            botmsg.textContent = result.choices[0].message.content;
        } else {
            throw new Error("Invalid response structure");
        }
    } catch (error) {
        console.error("Vicuna API Error:", error);
        botmsg.textContent = `Error: ${error.message || "Failed to communicate with Vicuna API"}`;
    }
}

async function mpt() {
    const userMsgValue = usermsg ? usermsg.value : '';
    const API_URL = "https://api.mosaicml.ai/v1/completions";

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${mptKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: "mpt-7b",
                prompt: userMsgValue,
                max_tokens: maxTokens,
                temperature: temperature
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        if (result?.choices?.[0]?.text) {
            botmsg.textContent = result.choices[0].text;
        } else {
            throw new Error("Invalid response structure");
        }
    } catch (error) {
        console.error("MPT API Error:", error);
        botmsg.textContent = `Error: ${error.message || "Failed to communicate with MPT API"}`;
    }
}
