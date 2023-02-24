import { PaginationItem } from "components/store/PaginationItem";
import { UserDto } from "models/api/company/UserDto";
import { ButtonPanelTitle, DisplayContainer, ItemsContainer, PaginationContainer } from "../Admin.style";
import { UserItem } from "./UserItem";

interface ListUserProps {
  content: UserDto;
}

export const ListUsers = (props: ListUserProps) => {
  return ( <div>
  {/* <DisplayContainer>
  <ButtonPanelTitle>Aktualna lista użytkowników:</ButtonPanelTitle>
  {users?.content && users.content.length > 0 ? (
    <>
      <ItemsContainer>
        {users?.content.map((x) => (
          <UserItem key={x.uuid} user={x} />
        ))}
      </ItemsContainer>
      <PaginationContainer>
        {Array.from({ length: users.totalPages }).map((x, i) => (
          <PaginationItem
            key={i}
            onPageChanged={onPageChanged}
            number={i + 1}
          />
        ))}, []
      </PaginationContainer>
    </>
  ) : (
    <h2>Brak użytkowników do wyświetlenia</h2>
  )}          
</DisplayContainer>  */}
</div> 
  )
};