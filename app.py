from flask import Flask, render_template, request, jsonify
import openai

app = Flask(__name__)

# Set your OpenAI API key here
openai.api_key = "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"

# Initialize the conversation with a system message
messages = [{"role": "system", "content": "You are a helpful assistant."}]


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/get_bot_response', methods=['POST'])
def get_bot_response():
    user_input = request.form['user_input']

    # Check if the user wants to exit
    if user_input.lower() == 'exit':
        return jsonify({"bot_reply": "Goodbye!"})

    # Add user message to the conversation
    messages.append({"role": "user", "content": user_input})

    # Generate a response from the chatbot
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=messages,
        engine="text-davinci-003",  # Specify the engine (e.g., davinci, text-davinci-003, curie, etc.)
    )

    bot_reply = response.choices[0].message.content

    # Add bot's response to the conversation
    messages.append({"role": "assistant", "content": bot_reply})

    return jsonify({"bot_reply": bot_reply})


if __name__ == '__main__':
    app.run(debug=True)
