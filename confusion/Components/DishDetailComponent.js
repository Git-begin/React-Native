
import React from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  FlatList,
  Modal,
  TextInput,
} from "react-native";
import { Card, Icon, AirbnbRating } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import * as CommentAction from '../store/action/DishDetail';
import CommentModal from "./CommentsModal";
import Swipeable from "react-native-gesture-handler/Swipeable";
DishDetailComponent = (props) => {

  const initialComments = useSelector((state) => state.comments);
  const dispatch = useDispatch();
  const [displayModal, setDisplayModal] = React.useState(false);

  const toggleModal = () => setDisplayModal(!displayModal);
  const postCommnet = (model) => dispatch(CommentAction.postComment(model));

  const renderSeparator = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "#b2b2b2",
          marginVertical: 10,
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Card containerStyle={{ padding: 0, height: 330, borderRadius: 15 }}>
        <Swipeable          
          renderLeftActions={() => {
            setDisplayModal(true);
          }}
          onSwipeableLeftOpen={() => console.log("opening")}
        >
          <Card.Image
            style={{ marginLeft: 0, marginRight: 0 }}
            source={{
              uri:
                "https://c.ndtvimg.com/2020-01/dd46j918_chilli-chicken_625x300_21_January_20.jpg",
            }}
            PlaceholderContent={<ActivityIndicator />}
          />
          </Swipeable>
          <Text style={styles.cardTitle}>The most popular Chinese Dishes</Text>
          <View style={{ paddingVertical: 5, paddingHorizontal: 20 }}>
            <Text>
              Cupidatat excepteur veniam ea nisi Lorem labore dolor consequat
              quis. Voluptate in magna non irure sit ea incididunt eiusmod est.
              Consequat incididunt occaecat officia sit proident do ipsum
              exercitation consequat amet.
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              paddingHorizontal: 50,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setDisplayModal(true);
              }}
              style={styles.editButton}
              hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}
            >
              <Icon name="pencil" type="font-awesome" color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={styles.likeButton}>
              <Icon name="heartbeat" type="font-awesome" color="#fff" />
            </TouchableOpacity>
          </View>
        </Card>

      <View style={styles.listContainer}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            textAlign: "center",
            marginVertical: 5,
          }}
        >
          Comments
        </Text>
        <View
          style={{
            height: 0.5,
            width: "100%",
            backgroundColor: "#b2b2b2",
            marginVertical: 10,
          }}
        />
        <FlatList
          data={initialComments}
          renderItem={({ item }) => (
            <View
              style={{
                flex: 1,
                padding: 5,
                flexDirection: "column",
              }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={styles.item}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {item.Title}
                </Text>
                <Text style={styles.date}>{item.Date}</Text>
              </View>
              <AirbnbRating
                count={5}
                reviews={["Bad", "OK", "Good", "Very Good", "Amazing"]}
                defaultRating={item.Score}
                size={10}
              />
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={styles.description}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {item.Comments}
                </Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => {
            return item.Id.toString();
          }}
          ItemSeparatorComponent={renderSeparator}
        />
      </View>
      <CommentModal
        displayModal={displayModal}
        toggleModal={toggleModal}
        postCommnet={postCommnet}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    height: "100%",
  },
  listContainer: {
    flex: 1,
    padding: 0,
    backgroundColor: "white",
    height: "50%",
    margin: 15,
    borderRadius: 15,
    padding: 10,
  },
  image: {
    flex: 1,
    width: "100%",
  },
  cardTitle: {
    width: "100%",
    top: -50,
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 22,
  },
  likeButton: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: "#f46b27",
    marginHorizontal: 10,
  },
  editButton: {
    backgroundColor: "#8727f4",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    marginHorizontal: 10,
  },
  item: {
    padding: 0,
    fontSize: 14,
    height: 20,
    width: "60%",
    overflow: "hidden",
    fontWeight: "bold",
  },
  description: {
    padding: 0,
    fontSize: 14,
    height: 20,
    width: "95%",
    overflow: "hidden",
    marginTop: 20,
  },
  date: {
    padding: 0,
    fontSize: 10,
    height: 20,
    color: "#b2b2b2",
  },

});

export default DishDetailComponent;