export function formatDate(date: Date){
    return new Intl.DateTimeFormat("fr-FR", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(date)
}