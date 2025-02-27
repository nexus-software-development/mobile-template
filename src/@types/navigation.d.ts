import { RootStackParamList } from "@constants/routes";
import { StackScreenProps } from "@react-navigation/stack";

export declare namespace global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;
