import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

interface RecipeFormModalProps{
    isOpen: boolean;
    onClose: () => void
}

export default function RecipeFormModal({isOpen, onClose}: RecipeFormModalProps) {
    return(
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Nova Receita</DialogTitle>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
};
