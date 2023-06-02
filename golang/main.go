package main

import (
	"fmt"
	"github.com/gorilla/mux"
	"net/http"
)

type User struct {
	Name     string `json:"name"`
	Email    string `json:"email"`
	Password string `json:"password"`
}

func handleSubmit(w http.ResponseWriter, r *http.Request) {
	// Обработка данных формы
	r.ParseForm()
	name := r.Form.Get("name")
	email := r.Form.Get("email")
	message := r.Form.Get("message")

	// Действия с данными
	// ...

	// Отправка ответа клиенту
	fmt.Fprintf(w, "Данные получены: %s, %s, %s", name, email, message)
}

func main() {
	r := mux.NewRouter()

	r.HandleFunc("/signup", handleSubmit).Methods("POST")

	http.Handle("/", r)
	http.ListenAndServe(":8080", nil)
}
