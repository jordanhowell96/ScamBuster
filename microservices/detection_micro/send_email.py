import json
import zmq

context = zmq.Context()
socket = context.socket(zmq.REQ)
socket.connect("tcp://localhost:5555")


def send_email(email, subject, message):
    socket.send(json.dumps({"email": email, "subject": subject, "message": message}).encode())
    response = socket.recv().decode()
    print("Response:", response)


if __name__ == "__main__":
    print("Sending Test Email")
    send_email('test.user@domain.com', '(Test) Scam Detected', 'This is a test message for a detected scam.')
