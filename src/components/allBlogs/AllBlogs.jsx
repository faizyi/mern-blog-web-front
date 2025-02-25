import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Button } from '../ui/button'
import { Skeleton } from '../ui/skeleton'

export const AllBlogs = () => {
  return (
    <div className="container mx-auto py-10 px-4">
        <h3 className="text-2xl font-semibold mb-6">Latest Posts</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {
        //   loading
        //     ? 
            [1, 2, 3].map((_, i) => <Skeleton key={i} className="h-40 w-full" />)
            // : posts.map((post) => (
            //     <Card key={post._id} className="hover:shadow-lg transition">
            //       <CardContent>
            //         <CardTitle>{post.title}</CardTitle>
            //         <p className="text-sm text-gray-600 mt-2">{post.content.substring(0, 100)}...</p>
            //         <Button variant="link" className="mt-4">Read More</Button>
            //       </CardContent>
            //     </Card>
            //   ))
              }
        </div>
      </div>
  )
}
