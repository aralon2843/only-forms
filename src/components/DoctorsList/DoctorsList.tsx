import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDoctors } from '../../store/profile/actions';
import { RootState } from '../../store/store';
import {
  TitlesItem,
  TitlesList,
  ListWrapper,
  List,
  ListItem,
  ListItemElement,
  ListItemStatus,
} from '../common/List.styles';
import { ErrorTitle } from '../common/Pages.styles';

interface IDoctorsList {
  accessToken: string | null;
}

const DoctorsList: React.FC<IDoctorsList> = ({ accessToken }): JSX.Element => {
  const dispatch = useDispatch();

  const doctors = useSelector((state: RootState) => state.profile.doctors);
  const status = useSelector((state: RootState) => state.profile.status);

  useEffect(() => {
    accessToken && dispatch(fetchDoctors(accessToken));
  }, [accessToken, dispatch]);

  return (
    <ListWrapper>
      <TitlesList>
        <TitlesItem>Имя</TitlesItem>
        <TitlesItem>Статус</TitlesItem>
      </TitlesList>
      {status === 'loading' ? (
        <ErrorTitle>Loading...</ErrorTitle>
      ) : (
        <List>
          {doctors?.map((doctor) => (
            <ListItem key={doctor.id}>
              <ListItemElement>
                {`${doctor.firstName}  ${doctor.lastName}`}
              </ListItemElement>
              <ListItemElement>
                {
                  <ListItemStatus status={doctor.isActive}>
                    {doctor.isActive ? 'Активен' : 'Не активен'}
                  </ListItemStatus>
                }
              </ListItemElement>
            </ListItem>
          ))}
        </List>
      )}
    </ListWrapper>
  );
};

export default DoctorsList;
