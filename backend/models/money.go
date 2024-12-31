package models

type Money struct {
	Amount   int    `json:"amount"`
	Currency string `json:"currency"`
}