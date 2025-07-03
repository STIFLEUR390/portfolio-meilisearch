import type {
  Profile,
  Service,
  Education,
  ExperienceProfessionnelle,
  MediaSocial,
  Temoignage,
  Client,
  Competence,
  ContactInfo,
  Projet,
  Blog,
  BlogCategorie,
  BlogCommentaire
} from '~/store/interfaces';

type SearchFn = (searchText: string, options?: Record<string, unknown>) => void;

export const getProfile = async (): Promise<{ search: SearchFn; data: Profile | undefined }> => {
  const { search, result } = useMeiliSearch("profiles");
  await search("", { limit: 1 });
  const data = result.value?.hits?.[0] as Profile | undefined;
  return { search, data };
};

export const getServices = async (searchText: string = ""): Promise<{ search: SearchFn; data: Service[] | undefined }> => {
  const { search: doSearch, result } = useMeiliSearch("services");
  if (typeof searchText === "string" && searchText.length > 3) {
    await doSearch(searchText, { limit: 100 });
  } else {
    await doSearch("", { limit: 100 });
  }
  const data = result.value?.hits as Service[] | undefined;
  return { search: doSearch, data };
};

export const getEducations = async (): Promise<{ search: SearchFn; data: Education[] | undefined }> => {
  const { search, result } = useMeiliSearch("education");
  await search("", { limit: 100 });
  const data = result.value?.hits as Education[] | undefined;
  return { search, data };
};

export const getExperiences = async (): Promise<{ search: SearchFn; data: ExperienceProfessionnelle[] | undefined }> => {
  const { search, result } = useMeiliSearch("experience_professionnelles");
  await search("", { limit: 100 });
  const data = result.value?.hits as ExperienceProfessionnelle[] | undefined;
  return { search, data };
};

export const getMediaSocials = async (): Promise<{ search: SearchFn; data: MediaSocial[] | undefined }> => {
  const { search, result } = useMeiliSearch("media_socials");
  await search("", { limit: 100 });
  const data = result.value?.hits as MediaSocial[] | undefined;
  return { search, data };
};

export const getTemoignages = async (): Promise<{ search: SearchFn; data: Temoignage[] | undefined }> => {
  const { search, result } = useMeiliSearch("temoignages");
  await search("", { limit: 100 });
  const data = result.value?.hits as Temoignage[] | undefined;
  return { search, data };
};

export const getClients = async (): Promise<{ search: SearchFn; data: Client[] | undefined }> => {
  const { search, result } = useMeiliSearch("clients");
  await search("", { limit: 100 });
  const data = result.value?.hits as Client[] | undefined;
  return { search, data };
};

export const getCompetences = async (): Promise<{ search: SearchFn; data: Competence[] | undefined }> => {
  const { search, result } = useMeiliSearch("competences");
  await search("", { limit: 100 });
  const data = result.value?.hits as Competence[] | undefined;
  return { search, data };
};

export const getContactInfos = async (): Promise<{ search: SearchFn; data: ContactInfo | undefined }> => {
  const { search, result } = useMeiliSearch("contact_infos");
  await search("", { limit: 1 });
  const data = result.value?.hits?.[0] as ContactInfo | undefined;
  return { search, data };
};

export const getProjets = async (): Promise<{ search: SearchFn; data: Projet[] | undefined }> => {
  const { search, result } = useMeiliSearch("projets");
  await search("", { limit: 100 });
  const data = result.value?.hits as Projet[] | undefined;
  return { search, data };
};

export const getBlogs = async (): Promise<{ search: SearchFn; data: Blog[] | undefined }> => {
  const { search, result } = useMeiliSearch("blogs");
  await search("", { limit: 100 });
  const data = result.value?.hits as Blog[] | undefined;
  return { search, data };
};

export const getBlogCategories = async (): Promise<{ search: SearchFn; data: BlogCategorie[] | undefined }> => {
  const { search, result } = useMeiliSearch("blog_categories");
  await search("", { limit: 100 });
  const data = result.value?.hits as BlogCategorie[] | undefined;
  return { search, data };
};

export const getBlogCommentaires = async (): Promise<{ search: SearchFn; data: BlogCommentaire[] | undefined }> => {
  const { search, result } = useMeiliSearch("blog_commentaires");
  await search("", { limit: 100 });
  const data = result.value?.hits as BlogCommentaire[] | undefined;
  return { search, data };
};

/*
export const getprofile = async (id) => {
  const response = await axios.get(`/api/v1/profiles/${id}`)
  return response.data
}

*/
