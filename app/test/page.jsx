"use client"
import { Button } from '@/components/ui/button'

import { AlertDialogFooter, AlertDialogHeader } from '@/components/ui/alert-dialog'
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogTitle } from '@/components/ui/alert-dialog'
import React, { useState } from 'react'

const Page = () => {
    const [isOpen, setIsOpen] = useState(false);

  const handleError = () => {
    // Simulate an error occurring
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
     <div>test</div>
    
  )
}
export default Page
