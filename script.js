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
    const ANIMATION_DURATION = 400;
    const EXPANDED_WIDTH = "200px";
    const COLLAPSED_WIDTH = "200px";
    const MIN_WIDTH = "200px";

    charButton.addEventListener("click", function() {
        if (charButton.dataset.animating === "true") return;
        
        charButton.dataset.animating = "true";
        
        const newState = !isExpanded;
        
        chatbar.style.width = newState ? EXPANDED_WIDTH : COLLAPSED_WIDTH;
        chatbar.style.minWidth = MIN_WIDTH;
        charButton.style.left = newState ? EXPANDED_WIDTH : COLLAPSED_WIDTH;
        charButton.textContent = newState ? "<" : ">";

        const newClass = newState ? "expanded" : "collapsed";
        const oldClass = newState ? "collapsed" : "expanded";

        chatbar.classList.remove(oldClass);
        chatbar.classList.add(newClass);
        charButton.classList.remove(oldClass);
        charButton.classList.add(newClass);

        setTimeout(() => {
            charButton.dataset.animating = "false";
        }, ANIMATION_DURATION);

        isExpanded = newState;
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
        const settingMaxLength = parseInt(document.getElementById("settingMaxLengthInput")?.value || "4096", 10);
        if (settingMaxLength > 4096) {
            window.alert("ERR: Max length exceeds limit!");
            return;
        } 
        if (gptIsSelected || gpt4IsSelected) {
            openai('gpt');
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
        } else {
            openai('gpt');
        }
    });
});
let temperature = localStorage.getItem('temperature') ? parseFloat(localStorage.getItem('temperature')) : 0.7;
let maxTokens = localStorage.getItem('maxTokens') ? parseInt(localStorage.getItem('maxTokens')) : 1000;

document.addEventListener("DOMContentLoaded", function() {
    const saveApiSettings = document.getElementById("save-api-settings");
    if (saveApiSettings) {
        saveApiSettings.addEventListener("click", function() {
            const googleKey = document.getElementById("google-key")?.value?.trim() || "";
            const claudeKey = document.getElementById("claude-key")?.value?.trim() || "";
            const openRouterKey = document.getElementById("openrouter-key")?.value?.trim() || "";
            const llama2Key = document.getElementById("llama2-key")?.value?.trim() || "";
            const mistralKey = document.getElementById("mistral-key")?.value?.trim() || "";
            const palmKey = document.getElementById("palm-key")?.value?.trim() || "";
            const anthropicKey = document.getElementById("anthropic-key")?.value?.trim() || "";
            const falconKey = document.getElementById("falcon-key")?.value?.trim() || "";
            const gptNeoKey = document.getElementById("gptneo-key")?.value?.trim() || "";
            const bloomKey = document.getElementById("bloom-key")?.value?.trim() || "";
            const optKey = document.getElementById("opt-key")?.value?.trim() || "";
            const dollyKey = document.getElementById("dolly-key")?.value?.trim() || "";
            const stablelmKey = document.getElementById("stablelm-key")?.value?.trim() || "";
            const pythiaKey = document.getElementById("pythia-key")?.value?.trim() || "";
            const vicunaKey = document.getElementById("vicuna-key")?.value?.trim() || "";
            const mptKey = document.getElementById("mpt-key")?.value?.trim() || "";
            
            if (googleKey) {
                localStorage.setItem('google-key', googleKey);
                geminiKey = googleKey;
            }
            if (claudeKey) {
                localStorage.setItem('claude-key', claudeKey);
                claudeApiKey = claudeKey;
            }
            if (openRouterKey) {
                localStorage.setItem('openrouter-key', openRouterKey);
                openRouterApiKey = openRouterKey;
            }
            if (llama2Key) {
                localStorage.setItem('llama2-key', llama2Key);
                llama2ApiKey = llama2Key;
            }
            if (mistralKey) {
                localStorage.setItem('mistral-key', mistralKey);
                mistralApiKey = mistralKey;
            }
            if (palmKey) {
                localStorage.setItem('palm-key', palmKey);
                palmApiKey = palmKey;
            }
            if (anthropicKey) {
                localStorage.setItem('anthropic-key', anthropicKey);
                anthropicApiKey = anthropicKey;
            }
            if (falconKey) {
                localStorage.setItem('falcon-key', falconKey);
                falconApiKey = falconKey;
            }
            if (gptNeoKey) {
                localStorage.setItem('gptneo-key', gptNeoKey);
                gptNeoApiKey = gptNeoKey;
            }
            if (bloomKey) {
                localStorage.setItem('bloom-key', bloomKey);
                bloomApiKey = bloomKey;
            }
            if (optKey) {
                localStorage.setItem('opt-key', optKey);
                optApiKey = optKey;
            }
            if (dollyKey) {
                localStorage.setItem('dolly-key', dollyKey);
                dollyApiKey = dollyKey;
            }
            if (stablelmKey) {
                localStorage.setItem('stablelm-key', stablelmKey);
                stablelmApiKey = stablelmKey;
            }
            if (pythiaKey) {
                localStorage.setItem('pythia-key', pythiaKey);
                pythiaApiKey = pythiaKey;
            }
            if (vicunaKey) {
                localStorage.setItem('vicuna-key', vicunaKey);
                vicunaApiKey = vicunaKey;
            }
            if (mptKey) {
                localStorage.setItem('mpt-key', mptKey);
                mptApiKey = mptKey;
            }
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

            localStorage.setItem('temperature', temperature);
            localStorage.setItem('maxTokens', maxTokens);
        });
    }
});

async function openai(gpt) {
    const userMsgValue = usermsg ? usermsg.value : '';
    const model = gpt === "gpt" ? "gpt-3.5-turbo" : "gpt-4";
    const typingIndicator = document.getElementById("typing-indicator");

    try {
        typingIndicator.style.display = "block";

        const response = await fetch("https://text.pollinations.ai/", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
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

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("text/plain")) {
            const text = await response.text();
            botmsg.textContent = text;
            typingIndicator.style.display = "none";
            return;
        }

        const text = await response.text();
        let data;
        try {
            data = JSON.parse(text);
        } catch (e) {
            if (text.trim().length > 0 && !text.includes('{') && !text.includes('[')) {
                botmsg.textContent = text;
                typingIndicator.style.display = "none";
                return;
            }
            throw new Error('Invalid JSON response from API');
        }

        if (!data.choices?.[0]?.message?.content) {
            throw new Error('Invalid response format from API');
        }

        botmsg.textContent = data.choices[0].message.content;
        typingIndicator.style.display = "none";

    } catch (error) {
        console.error('Error:', error);
        botmsg.textContent = 'Sorry, there was an error processing your request. Please try again.';
        typingIndicator.style.display = "none";
    }
}

async function claude() {
    const userMsgValue = usermsg ? usermsg.value : '';
    const botmsg = document.getElementById("botmsg");
    const typingIndicator = document.getElementById("typing-indicator");
    const claudeKey = localStorage.getItem('claude-key');

    try {
        if (!claudeKey) {
            throw new Error('Claude API key not found. Please add your API key in settings.');
        }

        typingIndicator.style.display = "block";

        const response = await fetch("https://api.anthropic.com/v1/messages", {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': claudeKey,
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
                model: "claude-3-opus-20240229",
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
            botmsg.style.display = "block";
            botmsg.textContent = result.content[0].text;
            botmsg.style.animation = "messageSlideIn 0.3s ease-out forwards";
        } else {
            throw new Error("Invalid response structure");
        }
    } catch (error) {
        console.error("Claude API Error:", error);
        botmsg.style.display = "block";
        botmsg.textContent = `Error: ${error.message || "Failed to communicate with Claude API"}`;
    } finally {
        typingIndicator.style.display = "none";
    }
}

async function openRouter() {
    const userMsgValue = usermsg ? usermsg.value : '';
    const botmsg = document.getElementById("botmsg");
    const typingIndicator = document.getElementById("typing-indicator");
    const openRouterKey = localStorage.getItem('openrouter-key');
        
    try {
        if (!openRouterKey) {
            throw new Error('OpenRouter API key not found. Please add your API key in settings.');
        }

        typingIndicator.style.display = "block";
        
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${openRouterKey}`,
                "HTTP-Referer": window.location.href,
                "X-Title": "AI Chat Interface",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "openai/gpt-4-turbo-preview",
                messages: [
                    { role: "user", content: userMsgValue }
                ],
                max_tokens: maxTokens,
                temperature: temperature,
                top_p: 0.9,
                stream: false
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        
        if (result?.choices?.[0]?.message?.content) {
            botmsg.style.display = "block";
            botmsg.textContent = result.choices[0].message.content;
            botmsg.style.animation = "messageSlideIn 0.3s ease-out forwards";
        } else {
            console.error("Invalid response structure:", result);
            botmsg.textContent = "Error: Failed to get valid response from OpenRouter API";
        }
    } catch (error) {
        console.error("OpenRouter API Error:", error);
        botmsg.style.display = "block";
        botmsg.textContent = `Error: ${error.message || "Failed to communicate with OpenRouter API"}`;
    } finally {
        typingIndicator.style.display = "none";
    }
}

async function llama2() {
    const userMsgValue = usermsg ? usermsg.value : '';
    const botmsg = document.getElementById("botmsg");
    const typingIndicator = document.getElementById("typing-indicator");
    const llama2Key = localStorage.getItem('llama2-key');
    
    try {
        if (!llama2Key) {
            throw new Error('Llama2 API key not found. Please add your API key in settings.');
        }

        typingIndicator.style.display = "block";
        
        const response = await fetch("https://api.perplexity.ai/chat/completions", {
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
                stream: false
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        if (result?.choices?.[0]?.message?.content) {
            botmsg.style.display = "block";
            botmsg.textContent = result.choices[0].message.content;
            botmsg.style.animation = "messageSlideIn 0.3s ease-out forwards";
        } else {
            throw new Error("Invalid response structure");
        }
    } catch (error) {
        console.error("Llama 2 API Error:", error);
        botmsg.style.display = "block";
        botmsg.textContent = `Error: ${error.message || "Failed to communicate with Llama 2 API"}`;
    } finally {
        typingIndicator.style.display = "none";
    }
}

async function mistral() {
    const userMsgValue = usermsg ? usermsg.value : '';
    const botmsg = document.getElementById("botmsg");
    const typingIndicator = document.getElementById("typing-indicator");
    const mistralKey = localStorage.getItem('mistral-key');
    
    try {
        if (!mistralKey) {
            throw new Error('Mistral API key not found. Please add your API key in settings.');
        }

        typingIndicator.style.display = "block";
        
        const response = await fetch("https://api.mistral.ai/v1/chat/completions", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${mistralKey}`
            },
            body: JSON.stringify({
                model: "mistral-large-latest",
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
            botmsg.style.display = "block";
            botmsg.textContent = result.choices[0].message.content;
            botmsg.style.animation = "messageSlideIn 0.3s ease-out forwards";
        } else {
            throw new Error("Invalid response structure");
        }
    } catch (error) {
        console.error("Mistral API Error:", error);
        botmsg.style.display = "block";
        botmsg.textContent = `Error: ${error.message || "Failed to communicate with Mistral API"}`;
    } finally {
        typingIndicator.style.display = "none";
    }
}

async function palm() {
    const userMsgValue = usermsg ? usermsg.value : '';
    const botmsg = document.getElementById("botmsg");
    const typingIndicator = document.getElementById("typing-indicator");
    const palmKey = localStorage.getItem('palm-key');
    
    try {
        if (!palmKey) {
            throw new Error('PaLM API key not found. Please add your API key in settings.');
        }

        typingIndicator.style.display = "block";
        
        const response = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${palmKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: userMsgValue
                    }]
                }],
                generationConfig: {
                    temperature: temperature,
                    maxOutputTokens: maxTokens,
                    topP: 0.8,
                    topK: 40
                }
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        if (result?.candidates?.[0]?.content?.parts?.[0]?.text) {
            botmsg.style.display = "block";
            botmsg.textContent = result.candidates[0].content.parts[0].text;
            botmsg.style.animation = "messageSlideIn 0.3s ease-out forwards";
        } else {
            throw new Error("Invalid response structure");
        }
    } catch (error) {
        console.error("Gemini API Error:", error);
        botmsg.style.display = "block";
        botmsg.textContent = `Error: ${error.message || "Failed to communicate with Gemini API"}`;
    } finally {
        typingIndicator.style.display = "none";
    }
}

async function anthropic() {
    const userMsgValue = usermsg ? usermsg.value : '';
    const botmsg = document.getElementById("botmsg");
    const typingIndicator = document.getElementById("typing-indicator");
    const anthropicKey = localStorage.getItem('anthropic-key');
    
    try {
        if (!anthropicKey) {
            throw new Error('Anthropic API key not found. Please add your API key in settings.');
        }

        typingIndicator.style.display = "block";
        
        const response = await fetch("https://api.anthropic.com/v1/messages", {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': anthropicKey,
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
                model: "claude-3-opus-20240229",
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
            botmsg.style.display = "block";
            botmsg.textContent = result.content[0].text;
            botmsg.style.animation = "messageSlideIn 0.3s ease-out forwards";
        } else {
            throw new Error("Invalid response structure");
        }
    } catch (error) {
        console.error("Anthropic API Error:", error);
        botmsg.style.display = "block";
        botmsg.textContent = `Error: ${error.message || "Failed to communicate with Anthropic API"}`;
    } finally {
        typingIndicator.style.display = "none";
    }
}

async function falcon() {
    const userMsgValue = usermsg ? usermsg.value : '';
    const botmsg = document.getElementById("botmsg");
    const typingIndicator = document.getElementById("typing-indicator");
    const falconKey = localStorage.getItem('falcon-key');
    
    try {
        if (!falconKey) {
            throw new Error('Falcon API key not found. Please add your API key in settings.');
        }

        typingIndicator.style.display = "block";
        
        const response = await fetch("https://api.together.xyz/v1/chat/completions", {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${falconKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: "tiiuae/falcon-180B",
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
            botmsg.style.display = "block";
            botmsg.textContent = result.choices[0].message.content;
            botmsg.style.animation = "messageSlideIn 0.3s ease-out forwards";
        } else {
            throw new Error("Invalid response structure");
        }
    } catch (error) {
        console.error("Falcon API Error:", error);
        botmsg.style.display = "block";
        botmsg.textContent = `Error: ${error.message || "Failed to communicate with Falcon API"}`;
    } finally {
        typingIndicator.style.display = "none";
    }
}

async function gptNeo() {
    const userMsgValue = usermsg ? usermsg.value : '';
    const botmsg = document.getElementById("botmsg");
    const typingIndicator = document.getElementById("typing-indicator");
    const gptNeoKey = localStorage.getItem('gptneo-key');

    try {
        if (!gptNeoKey) {
            throw new Error('GPT-Neo API key not found. Please add your API key in settings.');
        }

        typingIndicator.style.display = "block";
        
        const response = await fetch("https://api.together.xyz/v1/completions", {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${gptNeoKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: "EleutherAI/gpt-neox-20b",
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
            botmsg.style.display = "block";
            botmsg.textContent = result.choices[0].text;
            botmsg.style.animation = "messageSlideIn 0.3s ease-out forwards";
        } else {
            throw new Error("Invalid response structure");
        }
    } catch (error) {
        console.error("GPT-Neo API Error:", error);
        botmsg.style.display = "block";
        botmsg.textContent = `Error: ${error.message || "Failed to communicate with GPT-Neo API"}`;
    } finally {
        typingIndicator.style.display = "none";
    }
}

async function bloom() {
    const userMsgValue = usermsg ? usermsg.value : '';
    const botmsg = document.getElementById("botmsg");
    const typingIndicator = document.getElementById("typing-indicator");
    const bloomKey = localStorage.getItem('bloom-key');

    try {
        if (!bloomKey) {
            throw new Error('BLOOM API key not found. Please add your API key in settings.');
        }

        typingIndicator.style.display = "block";
        
        const response = await fetch("https://api.together.xyz/v1/completions", {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${bloomKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: "bigscience/bloom",
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
            botmsg.style.display = "block";
            botmsg.textContent = result.choices[0].text;
            botmsg.style.animation = "messageSlideIn 0.3s ease-out forwards";
        } else {
            throw new Error("Invalid response structure");
        }
    } catch (error) {
        console.error("BLOOM API Error:", error);
        botmsg.style.display = "block";
        botmsg.textContent = `Error: ${error.message || "Failed to communicate with BLOOM API"}`;
    } finally {
        typingIndicator.style.display = "none";
    }
}

async function opt() {
    const userMsgValue = usermsg ? usermsg.value : '';
    const botmsg = document.getElementById("botmsg");
    const typingIndicator = document.getElementById("typing-indicator");
    const optKey = localStorage.getItem('opt-key');

    try {
        if (!optKey) {
            throw new Error('OPT API key not found. Please add your API key in settings.');
        }

        typingIndicator.style.display = "block";
        
        const response = await fetch("https://api.together.xyz/v1/completions", {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${optKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: "facebook/opt-66b",
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
            botmsg.style.display = "block";
            botmsg.textContent = result.choices[0].text;
            botmsg.style.animation = "messageSlideIn 0.3s ease-out forwards";
        } else {
            throw new Error("Invalid response structure");
        }
    } catch (error) {
        console.error("OPT API Error:", error);
        botmsg.style.display = "block";
        botmsg.textContent = `Error: ${error.message || "Failed to communicate with OPT API"}`;
    } finally {
        typingIndicator.style.display = "none";
    }
}

async function dolly() {
    const userMsgValue = usermsg ? usermsg.value : '';
    const botmsg = document.getElementById("botmsg");
    const typingIndicator = document.getElementById("typing-indicator");
    const dollyKey = localStorage.getItem('dolly-key');

    try {
        if (!dollyKey) {
            throw new Error('Dolly API key not found. Please add your API key in settings.');
        }

        typingIndicator.style.display = "block";
        
        const response = await fetch("https://api.together.xyz/v1/completions", {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${dollyKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: "databricks/dolly-v2-12b",
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
            botmsg.style.display = "block";
            botmsg.textContent = result.choices[0].text;
            botmsg.style.animation = "messageSlideIn 0.3s ease-out forwards";
        } else {
            throw new Error("Invalid response structure");
        }
    } catch (error) {
        console.error("Dolly API Error:", error);
        botmsg.style.display = "block";
        botmsg.textContent = `Error: ${error.message || "Failed to communicate with Dolly API"}`;
    } finally {
        typingIndicator.style.display = "none";
    }
}

async function stablelm() {
    const userMsgValue = usermsg ? usermsg.value : '';
    const botmsg = document.getElementById("botmsg");
    const typingIndicator = document.getElementById("typing-indicator");
    const stablelm = localStorage.getItem('stablelm-key');

    try {
        if (!stablelm) {
            throw new Error('StableLM API key not found. Please add your API key in settings.');
        }

        typingIndicator.style.display = "block";
        
        const response = await fetch("https://api.together.xyz/v1/completions", {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${stablelm}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: "stabilityai/stablelm-3b-4e1t",
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
            botmsg.style.display = "block";
            botmsg.textContent = result.choices[0].text;
            botmsg.style.animation = "messageSlideIn 0.3s ease-out forwards";
        } else {
            throw new Error("Invalid response structure");
        }
    } catch (error) {
        console.error("StableLM API Error:", error);
        botmsg.style.display = "block";
        botmsg.textContent = `Error: ${error.message || "Failed to communicate with StableLM API"}`;
    } finally {
        typingIndicator.style.display = "none";
    }
}

async function pythia() {
    const userMsgValue = usermsg ? usermsg.value : '';
    const botmsg = document.getElementById("botmsg");
    const typingIndicator = document.getElementById("typing-indicator");
    const pythiaKey = localStorage.getItem('pythia-key');

    try {
        if (!pythiaKey) {
            throw new Error('Pythia API key not found. Please add your API key in settings.');
        }

        typingIndicator.style.display = "block";
        
        const response = await fetch("https://api.together.xyz/v1/completions", {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${pythiaKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: "EleutherAI/pythia-12b",
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
            botmsg.style.display = "block";
            botmsg.textContent = result.choices[0].text;
            botmsg.style.animation = "messageSlideIn 0.3s ease-out forwards";
        } else {
            throw new Error("Invalid response structure");
        }
    } catch (error) {
        console.error("Pythia API Error:", error);
        botmsg.style.display = "block";
        botmsg.textContent = `Error: ${error.message || "Failed to communicate with Pythia API"}`;
    } finally {
        typingIndicator.style.display = "none";
    }
}

async function vicuna() {
    const userMsgValue = usermsg ? usermsg.value : '';
    const botmsg = document.getElementById("botmsg");
    const typingIndicator = document.getElementById("typing-indicator");
    const vicunaKey = localStorage.getItem('vicuna-key');

    try {
        if (!vicunaKey) {
            throw new Error('Vicuna API key not found. Please add your API key in settings.');
        }

        typingIndicator.style.display = "block";
        
        const response = await fetch("https://api.together.xyz/v1/chat/completions", {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${vicunaKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: "lmsys/vicuna-13b-v1.5",
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
            botmsg.style.display = "block";
            botmsg.textContent = result.choices[0].message.content;
            botmsg.style.animation = "messageSlideIn 0.3s ease-out forwards";
        } else {
            throw new Error("Invalid response structure");
        }
    } catch (error) {
        console.error("Vicuna API Error:", error);
        botmsg.style.display = "block";
        botmsg.textContent = `Error: ${error.message || "Failed to communicate with Vicuna API"}`;
    } finally {
        typingIndicator.style.display = "none";
    }
}

async function mpt() {
    const userMsgValue = usermsg ? usermsg.value : '';
    const botmsg = document.getElementById("botmsg");
    const typingIndicator = document.getElementById("typing-indicator");
    const mptKey = localStorage.getItem('mpt-key');

    try {
        if (!mptKey) {
            throw new Error('MPT API key not found. Please add your API key in settings.');
        }

        typingIndicator.style.display = "block";
        
        const response = await fetch("https://api.together.xyz/v1/completions", {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${mptKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: "mosaicml/mpt-7b",
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
            botmsg.style.display = "block";
            botmsg.textContent = result.choices[0].text;
            botmsg.style.animation = "messageSlideIn 0.3s ease-out forwards";
        } else {
            throw new Error("Invalid response structure");
        }
    } catch (error) {
        console.error("MPT API Error:", error);
        botmsg.style.display = "block";
        botmsg.textContent = `Error: ${error.message || "Failed to communicate with MPT API"}`;
    } finally {
        typingIndicator.style.display = "none";
    }
}
