package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

type User struct {
	Name string
	Age  int
}

var people []User

func main() {
	http.HandleFunc("/", mainHandler)
	fmt.Println("server started on port 8080")
	err := http.ListenAndServe("localhost:8080", nil)
	if err != nil {
		log.Fatal(err)
	}
}

func mainHandler(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case http.MethodGet:
		getPeople(w, r)
	case http.MethodPost:
		postUser(w, r)
	default:
		http.Error(w, "invalid method", http.StatusMethodNotAllowed)

	}
}

func getPeople(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(people)
	fmt.Fprintf(w, "get new person: '%v'", people)
}

func postUser(w http.ResponseWriter, r *http.Request) {
	var person User
	err := json.NewDecoder(r.Body).Decode(&person)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	people = append(people, person)
	fmt.Println(people)
	fmt.Fprintf(w, "post new perso: '%v'", person)
}
