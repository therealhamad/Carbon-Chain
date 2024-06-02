from flask import Flask, request, jsonify
import torch
from flask_cors import CORS
import numpy as np
from transformers import AutoModelForSequenceClassification, AutoTokenizer
import json

model_name = "climatebert/distilroberta-base-climate-sentiment"

model = AutoModelForSequenceClassification.from_pretrained(model_name)
tokenizer = AutoTokenizer.from_pretrained(model_name)
model.eval()

app = Flask(__name__)
CORS(app)
app.config["TEMPLATES_AUTO_RELOAD"] = True

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
         try: 
            json_data = request.get_json()
            text = json_data["text"]

            inputs = tokenizer(text, return_tensors="pt", padding=True, truncation=True)

            with torch.no_grad():
                output = model(**inputs)

            y_pred = np.argmax(output.logits.numpy(), axis=1).tolist()

            response = {"Received Text": text, "Prediction": y_pred}
            return jsonify(response)
         except Exception as e:
            return jsonify({"error": str(e)})
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8000)