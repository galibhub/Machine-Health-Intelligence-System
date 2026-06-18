from fastapi import FastAPI

app = FastAPI(
    title ="Machine Health Intelligece System",
    version="1.0.0"
)

@app.get("/")
def root():
    return {
        "message":"API Running Successfully"
    }