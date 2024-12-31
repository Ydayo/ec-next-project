package main

import (
	"backend/models" // ここが正しい
	"fmt"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

  r.GET("/ping", func(c *gin.Context) {
		money := &models.Money{Amount: 500, Currency: "yen"}
		fmt.Println("通りました")
		c.JSON(200, money)
  })

  r.Run()
}