"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Star } from "lucide-react"
import { getProductReviews } from "@/lib/products"

export default function ProductReviews({ productId }: { productId: string }) {
  const reviews = getProductReviews(productId)
  const [showReviewForm, setShowReviewForm] = useState(false)
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Customer Reviews ({reviews.length})</h3>
        <Button variant="outline" onClick={() => setShowReviewForm(!showReviewForm)}>
          {showReviewForm ? "Cancel" : "Write a Review"}
        </Button>
      </div>

      {showReviewForm && (
        <div className="rounded-lg border p-4">
          <h4 className="mb-4 font-medium">Write Your Review</h4>
          <div className="mb-4">
            <p className="mb-2 text-sm">Rating</p>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  className="p-1"
                >
                  <Star
                    className={`h-6 w-6 ${
                      star <= (hoveredRating || rating) ? "fill-primary text-primary" : "text-muted"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
          <div className="mb-4 space-y-2">
            <label htmlFor="review-title" className="text-sm">
              Title
            </label>
            <input
              id="review-title"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              placeholder="Summarize your review"
            />
          </div>
          <div className="mb-4 space-y-2">
            <label htmlFor="review-content" className="text-sm">
              Review
            </label>
            <Textarea id="review-content" placeholder="Write your review here..." className="min-h-[100px]" />
          </div>
          <Button>Submit Review</Button>
        </div>
      )}

      {reviews.length > 0 ? (
        <div className="space-y-6">
          {reviews.map((review, index) => (
            <div key={index} className="border-b pb-6 last:border-0">
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="relative h-8 w-8 overflow-hidden rounded-full">
                    <Image
                      src={review.avatar || "/placeholder.svg?height=100&width=100"}
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="font-medium">{review.name}</span>
                </div>
                <span className="text-sm text-muted-foreground">{review.date}</span>
              </div>
              <div className="mb-2 flex">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < review.rating ? "fill-primary text-primary" : "text-muted"}`}
                    />
                  ))}
              </div>
              <h4 className="mb-2 font-medium">{review.title}</h4>
              <p className="text-muted-foreground">{review.content}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground">No reviews yet. Be the first to review this product!</p>
      )}
    </div>
  )
}

