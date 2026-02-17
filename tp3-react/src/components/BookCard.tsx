// TODO : Définissez l'interface pour les Props
interface BookProps {
title: string;
author: string;
}
// TODO : Créez le composant qui reçoit ces props
const BookCard = ({ title, author }: BookProps) => {
return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
        <h3>{title}</h3>
        <p>Par : {author}</p>
    </div>
);
};
export default BookCard;