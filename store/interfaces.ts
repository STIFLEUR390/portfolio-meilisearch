// Interfaces centralisées pour les stores Pinia

export interface Profile {
    id: number;
    title: string;
    subtitle: string;
    nom: string;
    job: string;
    description_courte: string;
    about_me: string;
    photo_profile: string | null;
    galerie_photos: string[];
    video_presentation: string | null;
    texte_video_presentation: string | null;
    cv_url: string | null;
    date_naissance: string;
    created_at: string;
    updated_at: string;
}

export interface Service {
    id: number;
    icon: string;
    titre: string;
    description: string;
    is_active: boolean;
    ordre: number;
    created_at: string;
    updated_at: string;
}

export interface Education {
    id: number;
    classe_filiere: string;
    date_debut: string;
    date_fin: string;
    img: string;
    en_cours: boolean;
    etablissement_scolaire: string;
    description: string;
    note: number;
    is_active: boolean;
    ordre: number;
    created_at: string;
    updated_at: string;
}

export interface ExperienceProfessionnelle {
    id: number;
    metier: string;
    date_debut: string;
    date_fin: string;
    en_cours: boolean;
    img: string;
    entreprise: string;
    description: string;
    note: number;
    is_active: boolean;
    ordre: number;
    created_at: string;
    updated_at: string;
}

export interface MediaSocial {
    id: number;
    nom: string;
    icon: string;
    url: string;
    is_active: boolean;
    ordre: number;
    created_at: string;
    updated_at: string;
}

export interface Temoignage {
    id: number;
    client_id: number;
    projet_id: number;
    note: number;
    temoignage: string;
    is_featured: boolean;
    is_active: boolean;
    created_at: string;
    updated_at: string;
}

export interface Client {
    id: number;
    nom: string;
    photo: string | null;
    email: string;
    adresse: string;
    metier: string | null;
    poste: string | null;
    is_active: boolean;
    created_at: string;
    updated_at: string;
}

export interface Competence {
    id: number;
    nom: string;
    icon: string;
    url: string | null;
    pourcentage_maitrise: number | null;
    categorie: string | null;
    is_active: boolean;
    ordre: number;
    created_at: string;
    updated_at: string;
}

export interface ContactInfo {
    id: number;
    image: string | null;
    description: string;
    phone: string;
    email: string;
    adresse: string;
    is_active: boolean;
    created_at: string;
    updated_at: string;
}

export interface Projet {
    id: number;
    image_presentation: string | null;
    titre: string;
    slug: string;
    courte_description: string;
    description: string;
    date_livraison: string;
    budget: number;
    nombre_likes: number;
    projet_url: string | null;
    projet_video: string | null;
    is_featured: boolean;
    is_active: boolean;
    ordre: number;
    services: string[];
    created_at: string;
    updated_at: string;
}

export interface Blog {
    id: number;
    blog_categorie_id: number;
    image_presentation: string | null;
    nom: string;
    slug: string;
    contenu: string;
    meta_description: string;
    is_published: boolean;
    published_at: string;
    vues: number;
    temps_lecture: string | null;
    categorie_nom: string;
    created_at: string;
    updated_at: string;
}

export interface BlogCategorie {
    id: number;
    nom: string;
    slug: string;
    description: string;
    is_active: boolean;
    created_at: string;
    updated_at: string;
}

export interface BlogCommentaire {
    id: number;
    blog_id: number;
    nom: string;
    email: string;
    phone: string;
    site_web: string | null;
    commentaire: string;
    is_approved: boolean;
    created_at: string;
    updated_at: string;
}