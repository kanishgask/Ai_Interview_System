from transformers import pipeline

classifier = pipeline("sentiment-analysis")

def evaluate_answer(answer):
    result = classifier(answer)[0]

    score = 0
    if result['label'] == 'POSITIVE':
        score = result['score'] * 10
    else:
        score = result['score'] * 5

    if score > 7:
        feedback = "Excellent explanation with clarity."
    elif score > 5:
        feedback = "Good but can improve."
    else:
        feedback = "Needs improvement."

    return {
        "score": round(score, 2),
        "feedback": feedback
    }
