import { useQuery } from "@pinia/colada";
import { getProfile, getServices, getEducations, getExperiences, getMediaSocials, getCompetences, getTemoignages, getClients, getContactInfos, getProjets, getBlogs, getBlogCategories, getBlogCommentaires } from "~/services/api-services";
import { unref, type Ref } from "vue";

export function useProfileSearch() {
  const { state, refresh, refetch } = useQuery({
    key: ['profile'],
    query: async () => {
      // On récupère l'objet { data } et on ne garde que data
      const { data } = await Promise.resolve(getProfile());
      return data;
    },
  });
  return { state, refresh, refetch };
}

export function useServicesSearch(searchText: string | Ref<string>) {
  return useQuery({
    key: ['services', unref(searchText)],
    query: async () => {
      const { data } = await Promise.resolve(getServices(unref(searchText)));
      return data;
    },
  });
}

export function useEducationsSearch() {
  const { state, refresh, refetch } = useQuery({
    key: ['educations'],
    query: async () => {
      const { data } = await Promise.resolve(getEducations());
      return data;
    },
  });
  return { state, refresh, refetch };
}

export function useExperiencesSearch() {
  const { state, refresh, refetch } = useQuery({
    key: ['experiences'],
    query: async () => {
      const { data } = await Promise.resolve(getExperiences());
      return data;
    },
  });
  return { state, refresh, refetch };
}

export function useMediaSocialsSearch() {
  const { state, refresh, refetch } = useQuery({
    key: ['media_socials'],
    query: async () => {
      const { data } = await Promise.resolve(getMediaSocials());
      return data;
    },
  });
  return { state, refresh, refetch };
}

export function useTemoignagesSearch() {
  const { state, refresh, refetch } = useQuery({
    key: ['temoignages'],
    query: async () => {
      const { data } = await Promise.resolve(getTemoignages());
      return data;
    },
  });
  return { state, refresh, refetch };
}

export function useClientsSearch() {
  const { state, refresh, refetch } = useQuery({
    key: ['clients'],
    query: async () => {
      const { data } = await Promise.resolve(getClients());
      return data;
    },
  });
  return { state, refresh, refetch };
}

export function useCompetencesSearch() {
  const { state, refresh, refetch } = useQuery({
    key: ['media_socials'],
    query: async () => {
      const { data } = await Promise.resolve(getCompetences());
      return data;
    },
  });
  return { state, refresh, refetch };
}

export function useContactInfosSearch() {
  const { state, refresh, refetch } = useQuery({
    key: ['contact_infos'],
    query: async () => {
      const { data } = await Promise.resolve(getContactInfos());
      return data;
    },
  });
  return { state, refresh, refetch };
}

export function useProjetsSearch() {
  const { state, refresh, refetch } = useQuery({
    key: ['projets'],
    query: async () => {
      const { data } = await Promise.resolve(getProjets());
      return data;
    },
  });
  return { state, refresh, refetch };
}

export function useBlogsSearch() {
  const { state, refresh, refetch } = useQuery({
    key: ['blogs'],
    query: async () => {
      const { data } = await Promise.resolve(getBlogs());
      return data;
    },
  });
  return { state, refresh, refetch };
}

export function useBlogCategoriesSearch() {
  const { state, refresh, refetch } = useQuery({
    key: ['blog_categories'],
    query: async () => {
      const { data } = await Promise.resolve(getBlogCategories());
      return data;
    },
  });
  return { state, refresh, refetch };
}

export function useBlogCommentairesSearch() {
  const { state, refresh, refetch } = useQuery({
    key: ['blog_commentaires'],
    query: async () => {
      const { data } = await Promise.resolve(getBlogCommentaires());
      return data;
    },
  });
  return { state, refresh, refetch };
}