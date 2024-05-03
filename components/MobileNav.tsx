import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "./ui/sheet"

const MobileNav = ({ user }: MobileNavProps) => {
  return (
    <section>
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely certain</SheetTitle>
          <SheetDescription>
            This action cannot be undone.  Remove your data.
          </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </section>
  )
}

export default MobileNav