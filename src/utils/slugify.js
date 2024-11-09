export default function slugify(title){
    return title.toLowerCase().split(" ").join("-")
}