
export const cleanText = (text) => {
    if (typeof text !== "string") return text;
    return text.replace(/\s*\(.*?\)\s*/g, "").trim();
};

export const parseAutores = (autoresArray) => {
    try {
        return autoresArray.map((autor) => {
            const corrected = autor
                .replace(/'/g, '"')
                .replace(/ObjectId\("?(.*?)"?\)/g, '"$1"');
            return JSON.parse(corrected);
        });
    } catch (error) {
        console.error("Error al parsear autores:", error);
        return [];
    }
};
