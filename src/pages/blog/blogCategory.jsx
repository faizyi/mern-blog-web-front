import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import React, { useState } from 'react'

export const BlogCategory = ({setCategory}) => {
  return (
    <Select onValueChange={(value) => setCategory(value)}>
    <SelectTrigger className="w-[100%]">
      <SelectValue placeholder="Select Blog Category" />
    </SelectTrigger>
    <SelectContent position=''>
      <SelectItem value="Personal & Lifestyle">Personal & Lifestyle</SelectItem>
      <SelectItem value="Business & Marketing">Business & Marketing</SelectItem>
      <SelectItem value="Technology & Programming">Technology & Programming</SelectItem>
      <SelectItem value="Educational & Informational">Educational & Informational</SelectItem>
      <SelectItem value="Sports">Sports</SelectItem>
      <SelectItem value="Entertainment & Media">Entertainment & Media</SelectItem>
      <SelectItem value="Art & Creative">Art & Creative</SelectItem>
      <SelectItem value="News & Current Events">News & Current Events</SelectItem>
    </SelectContent>
  </Select>
  )
}
