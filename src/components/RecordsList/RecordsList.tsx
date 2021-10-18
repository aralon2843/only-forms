import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecords } from '../../store/profile/actions';
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

interface IRecordsList {
  accessToken: string | null;
}

const RecordsList: React.FC<IRecordsList> = ({ accessToken }): JSX.Element => {
  const dispatch = useDispatch();

  const records = useSelector((state: RootState) => state.profile.records);
  const status = useSelector((state: RootState) => state.profile.status);

  const convertedDate = (date: string): string => {
    return new Date(date).toLocaleDateString();
  };

  const convertedTime = (date: string): string => {
    return new Date(date).toLocaleTimeString().substr(0, 5);
  };

  useEffect(() => {
    accessToken && dispatch(fetchRecords(accessToken));
    
    // const data = {
    //   name: "Анатолий Кузнецов Иванович",
    //   phone: "+78005553535",
    //   doctor: "2",
    //   date: new Date().toJSON(),
    //   isChild: true,
    // }

    // axios.delete("http://clinic.studio-mind.ru/records/6",{
    //   headers: { Authorization: `Bearer ${accessToken}` },
    // })

  }, [accessToken, dispatch]);

  return (
    <ListWrapper>
      <TitlesList>
        <TitlesItem>Имя</TitlesItem>
        <TitlesItem>Специалист</TitlesItem>
        <TitlesItem>Телефон</TitlesItem>
        <TitlesItem>Статус</TitlesItem>
        <TitlesItem>Дата приема</TitlesItem>
        <TitlesItem>Время приема</TitlesItem>
      </TitlesList>
      {status === 'loading' ? (
        <ErrorTitle>Loading...</ErrorTitle>
      ) : (
        <List>
          {records?.map((record) => (
            <ListItem key={record.id}>
              <ListItemElement>{record.name}</ListItemElement>
              <ListItemElement>
                {`${record.doctor?.firstName} ${record.doctor?.lastName}`}
              </ListItemElement>
              <ListItemElement>{record.phone}</ListItemElement>
              <ListItemElement>
                <ListItemStatus status={'ended'}>Прием окончен</ListItemStatus>
              </ListItemElement>
              <ListItemElement>{convertedDate(record.date)}</ListItemElement>
              <ListItemElement>{convertedTime(record.date)}</ListItemElement>
            </ListItem>
          ))}
        </List>
      )}
    </ListWrapper>
  );
};

export default RecordsList;
