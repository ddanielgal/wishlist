import { Item, ItemContent, ItemDescription, ItemMedia } from "./ui/item";

export default function Wishlist() {
  return (
    <ol className="space-y-4">
      <Item variant="outline" role="listitem" className="items-start">
        <ItemMedia variant="image" className="size-36">
          <img
            src="https://placehold.co/144x144"
            alt="Placeholder"
            width={144}
            height={144}
            loading="lazy"
            className="aspect-square object-cover"
          />
        </ItemMedia>
        <ItemContent className="gap-3">
          <h3 className="text-lg leading-snug font-bold">Item title</h3>
          <ItemDescription>Item Description.</ItemDescription>
        </ItemContent>
      </Item>
    </ol>
  );
}
