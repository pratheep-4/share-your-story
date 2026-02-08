import { useState } from "react";
import { Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

interface ShareBookDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ShareBookDialog = ({ open, onOpenChange }: ShareBookDialogProps) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [subject, setSubject] = useState("");
  const [condition, setCondition] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !author || !subject || !condition || !location) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Book shared successfully! 🎉");
    setTitle("");
    setAuthor("");
    setSubject("");
    setCondition("");
    setLocation("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">Share a Book</DialogTitle>
          <DialogDescription>
            Fill in the details of the textbook you'd like to share.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          <div className="flex items-center justify-center rounded-lg border-2 border-dashed border-border bg-muted/50 p-8 cursor-pointer hover:bg-muted transition-colors">
            <div className="text-center space-y-2">
              <Camera className="mx-auto h-8 w-8 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">Click to upload a photo</p>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="title">Book Title</Label>
            <Input id="title" placeholder="e.g. Calculus: Early Transcendentals" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="author">Author</Label>
            <Input id="author" placeholder="e.g. James Stewart" value={author} onChange={(e) => setAuthor(e.target.value)} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Subject</Label>
              <Select value={subject} onValueChange={setSubject}>
                <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                <SelectContent>
                  {["Mathematics", "Physics", "Chemistry", "Biology", "Psychology", "History", "English", "Other"].map((s) => (
                    <SelectItem key={s} value={s}>{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Condition</Label>
              <Select value={condition} onValueChange={setCondition}>
                <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="Like New">Like New</SelectItem>
                  <SelectItem value="Good">Good</SelectItem>
                  <SelectItem value="Fair">Fair</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input id="location" placeholder="e.g. Boston, MA" value={location} onChange={(e) => setLocation(e.target.value)} />
          </div>

          <Button type="submit" className="w-full">Share This Book</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ShareBookDialog;
